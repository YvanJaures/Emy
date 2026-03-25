import 'dotenv/config'
import bcrypt from 'bcrypt'
import { faker } from "@faker-js/faker";
import { prisma } from '../prisma.js';

const hash = (pwd) => bcrypt.hashSync(pwd, 10);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const pickN = (arr, n) => [...arr].sort(() => Math.random() - 0.5).slice(0, n);

async function main() {
  console.log("🌱 Starting seed...");

  // ─── Clean up (order matters due to FK constraints) ───────────────────────
  await prisma.prize_sponsor.deleteMany();
  await prisma.prize.deleteMany();
  await prisma.player.deleteMany();
  await prisma.team_member.deleteMany();
  await prisma.team.deleteMany();
  await prisma.tournament.deleteMany();
  await prisma.admin.deleteMany();
  await prisma.community_member.deleteMany();
  await prisma.community.deleteMany();
  await prisma.sponsor.deleteMany();
  await prisma.employee.deleteMany();
  await prisma.member.deleteMany();
  await prisma.manager.deleteMany();
  await prisma.type.deleteMany();

  // ─── 1. Type (30) ─────────────────────────────────────────────────────────
  console.log("Creating Types...");
  const typeNames = [
    "Gold", "Silver", "Bronze", "Diamond", "Platinum", "Cash", "Trophy",
    "Medal", "Voucher", "Gift Card", "Equipment", "Scholarship", "Travel",
    "Experience", "Product", "Digital", "Certificate", "Subscription",
    "Membership", "Coaching", "Training", "Merchandise", "Ticket", "VIP Pass",
    "Crypto", "NFT", "Points", "Discount", "Charity", "Custom",
  ];
  await prisma.type.createMany({
    data: typeNames.map((name) => prisma.type.create ? { name } : { name })
  });
  const types = await prisma.type.findMany();

  // ─── 2. Manager (2) ───────────────────────────────────────────────────────
  console.log("Creating Managers...");
  await prisma.manager.createMany({
    data: Array.from({ length: 2 }, () =>
      prisma.manager.create ? { password: hash("Manager@123") } : { password: hash("Manager@123") }
    )
  });
  const managers = await prisma.manager.findMany();

  // ─── 3. Member (30) ───────────────────────────────────────────────────────
  console.log("Creating Members...");
  const membersData = Array.from({ length: 250 }, (_, i) => {
    const username = `${faker.internet.username().replace(/[^a-zA-Z0-9_]/g, "").slice(0, 40)}_${i}`;
    return {
      user_name: username,
      name: faker.person.firstName(),
      surname: faker.person.lastName(),
      address: faker.location.streetAddress(),
      birth_date: faker.date.birthdate({ min: 18, max: 55, mode: "age" }),
      country: faker.location.country().slice(0, 50),
      email: `user_${i}@test.com`,
      phone: faker.phone.number().slice(0, 50),
      avatar: faker.image.avatarGitHub(),
      password: hash("12345678"),
    };
  });

  await prisma.member.createMany({ data: membersData });
  const members = await prisma.member.findMany();

  // ─── 4. Employee (30) ─────────────────────────────────────────────────────
  console.log("Creating Employees...");
  await prisma.employee.createMany({
    data: members.map((m) =>
      prisma.employee.create ? {
        user_name: m.user_name,
        retraite: faker.datatype.boolean(),
      } : {
        user_name: m.user_name,
        retraite: faker.datatype.boolean(),
      }
    )
  });
  const employees = await prisma.employee.findMany();

  // ─── 5. Sponsor (30) ──────────────────────────────────────────────────────
  console.log("Creating Sponsors...");
  const sponsorMembers = pickN(members, 30);
  await prisma.sponsor.createMany({
    data: sponsorMembers.map((m) =>
      prisma.sponsor.create ? {
        user_name: m.user_name,
        company_name: faker.company.name().slice(0, 100),
        title: faker.person.jobTitle().slice(0, 100),
      } : {
        user_name: m.user_name,
        company_name: faker.company.name().slice(0, 100),
        title: faker.person.jobTitle().slice(0, 100),
      }
    )
  });
  const sponsors = await prisma.sponsor.findMany();

  // ─── 6. Community (30) ────────────────────────────────────────────────────
  console.log("Creating Communities...");
  await prisma.community.createMany({
    data: Array.from({ length: 15 }, () =>
      prisma.community.create ? {
        name: `${faker.word.adjective()} ${faker.word.noun()} Club`,
        details: faker.lorem.sentence(),
        avatar: faker.image.url(),
        members: faker.number.int({ min: 5, max: 200 }),
        location: faker.location.city().slice(0, 100),
        id_manager: pick(managers).id_manager,
        created: faker.date.past({ years: 5 }).toISOString().split("T")[0],
        privacy: faker.datatype.boolean(),
      } : {
        name: `${faker.word.adjective()} ${faker.word.noun()} Club`,
        details: faker.lorem.sentence(),
        avatar: faker.image.url(),
        members: faker.number.int({ min: 5, max: 200 }),
        location: faker.location.city().slice(0, 100),
        id_manager: pick(managers).id_manager,
        created: faker.date.past({ years: 5 }).toISOString().split("T")[0],
        privacy: faker.datatype.boolean(),
      }
    )
  });
  const communities = await prisma.community.findMany();

  // ─── 7. Admin (20) ────────────────────────────────────────────────────────
  console.log("Creating Admins...");
  const adminMembers = pickN(members, 20);
  await prisma.admin.createMany({
    data: adminMembers.map((m) =>
      prisma.admin.create ? {
        id_community: pick(communities).id_community,
        user_name: m.user_name,
      } : {
        id_community: pick(communities).id_community,
        user_name: m.user_name,
      }
    )
  });
  const admins = await prisma.admin.findMany();

  // ─── 8. Tournament (30) ───────────────────────────────────────────────────
  console.log("Creating Tournaments...");
  const tournamentsData = Array.from({ length: 30 }, () => {
    const start = faker.date.soon({ days: 90 });
    const end = new Date(start.getTime() + faker.number.int({ min: 1, max: 10 }) * 86400000);
    return {
      name:'tournoi-'+faker.internet.username(),
      location: faker.location.city().slice(0, 100),
      start_date: start,
      end_date: end,
      status: faker.number.int({ min: 0, max: 3 }),
      avatar: faker.image.url(),
      id_community: pick(communities).id_community,
      fees: parseFloat(faker.commerce.price({ min: 0, max: 500 })),
    };
  });

  await prisma.tournament.createMany({ data: tournamentsData });
  const tournaments = await prisma.tournament.findMany();

  // ─── 9. Community_member (250) ─────────────────────────────────────────────
  console.log("Creating Community members...");
  const usedCombos = new Set();
  const communityMembersData = [];

  while (communityMembersData.length < 250) {
    const member = pick(members);
    const community = pick(communities);
    const key = `${member.user_name}-${community.id_community}`;
    if (!usedCombos.has(key)) {
      usedCombos.add(key);
      communityMembersData.push({
        user_name: member.user_name,
        id_community: community.id_community,
        join_date: faker.date.past({ years: 3 }),
      });
    }
  }

  await prisma.community_member.createMany({ data: communityMembersData });

  // ─── 10. Team (30) ────────────────────────────────────────────────────────
  console.log("Creating Teams...");
  const teamsData = Array.from({ length: 30 }, () => ({
    name: `${faker.word.adjective()} ${faker.animal.type()}s`.slice(0, 50),
    members: faker.number.int({ min: 3, max: 12 }),
    players: faker.number.int({ min: 3, max: 12 }),
    id_tour: pick(tournaments).id_tour,
    key_team: faker.string.alphanumeric(8).slice(0, 50),
    open: faker.datatype.boolean(),
    user_name: pick(members).user_name,
  }));

  await prisma.team.createMany({ data: teamsData });
  const teams = await prisma.team.findMany();

  // ─── 11. Team_member (30) ─────────────────────────────────────────────────
  console.log("Creating Team members...");
  await prisma.team_member.createMany({
    data: Array.from({ length: 30 }, () => ({
      id_team: pick(teams).id_team,
      user_name: pick(members).user_name,
      status: faker.datatype.boolean(),
    }))
  });

  // ─── 12. Player (30) ──────────────────────────────────────────────────────
  console.log("Creating Players...");
  await prisma.player.createMany({
    data: Array.from({ length: 30 }, () => ({
      id_tour: pick(tournaments).id_tour,
      user_name: pick(members).user_name,
    }))
  });

  // ─── 13. Prize (30) ───────────────────────────────────────────────────────
  console.log("Creating Prizes...");
  const prizesData = Array.from({ length: 30 }, (_, i) => ({
    name: `${pick(["1st", "2nd", "3rd", "Top 5", "Top 10"])} Place Prize ${i + 1}`.slice(0, 50),
    spots: faker.number.int({ min: 1, max: 10 }),
    group_spot: faker.number.int({ min: 1, max: 5 }),
    id_tour: pick(tournaments).id_tour,
    id_type: pick(types).id_type,
    id_admin: pick(admins).id_admin,
  }));

  await prisma.prize.createMany({ data: prizesData });
  const prizes = await prisma.prize.findMany();

  // ─── 14. Prize_sponsor (30) ───────────────────────────────────────────────
  console.log("Creating Prize sponsors...");
  await prisma.prize_sponsor.createMany({
    data: Array.from({ length: 30 }, () => ({
      id_prize: pick(prizes).id_prize,
      user_name: pick(sponsors).user_name,
    }))
  });

  console.log("✅ Seed completed successfully!");
  console.log(`   Types:            ${types.length}`);
  console.log(`   Managers:         ${managers.length}`);
  console.log(`   Members:          ${members.length}`);
  console.log(`   Employees:        ${employees.length}`);
  console.log(`   Sponsors:         ${sponsors.length}`);
  console.log(`   Communities:      ${communities.length}`);
  console.log(`   Admins:           ${admins.length}`);
  console.log(`   Tournaments:      ${tournaments.length}`);
  console.log(`   Community_member: ${communityMembersData.length}`);
  console.log(`   Teams:            ${teams.length}`);
  console.log(`   Team_members:     30`);
  console.log(`   Players:          30`);
  console.log(`   Prizes:           ${prizes.length}`);
  console.log(`   Prize_sponsors:   30`);
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });