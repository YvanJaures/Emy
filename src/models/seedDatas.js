import 'dotenv/config'
import bcrypt from 'bcrypt'
import { prisma } from '../prisma.js';


// Fonction principale de seed
async function main() {
  console.log('🌱 Début du seeding de la base de données...');

  try {
    // Nettoyage des données existantes (ordre inverse des dépendances)
    await cleanDatabase();

    // Insertion des données dans l'ordre des dépendances
    await seedMembers();
    await seedEmployees();
    await seedSponsors();
    await seedManagers();
    await seedCommunities();
    await seedCommunityMembers();
    await seedAdmins();
    await seedTournaments();
    await seedPlayers();
    await seedTeams();
    await seedTeamMembers();
    await seedTypes();
    await seedPrizes();
    await seedPrizeSponsors();
    console.log('✅ Seeding terminé avec succès!');
  } catch (error) {
    console.error('❌ Erreur lors du seeding:', error);
    throw error;
  }
}

// Nettoyage de la base de données
async function cleanDatabase() {
  console.log('🧹 Nettoyage de la base de données...');
  
  await prisma.prize_sponsor.deleteMany();
  await prisma.prize.deleteMany();
  await prisma.type.deleteMany();
  await prisma.team_member.deleteMany();
  await prisma.team.deleteMany();
  await prisma.player.deleteMany();
  await prisma.tournament.deleteMany();
  await prisma.admin.deleteMany();
  await prisma.community_member.deleteMany();
  await prisma.community.deleteMany();
  await prisma.manager.deleteMany();
  await prisma.sponsor.deleteMany();
  await prisma.employee.deleteMany();
  await prisma.member.deleteMany();
  
  console.log('✓ Base de données nettoyée');
}

// Insertion des membres
async function seedMembers() {
  console.log('👥 Insertion des membres...');
    const members =[
    {
        user_name: 'asilva',
        name: 'Ana',
        surname: 'Silva',
        address: '147 Rio Ave, Rio de Janeiro',
        country: 'Brazil',
        email: 'ana.silva@email.com',
        phone: null,
        avatar: 'avatar7.jpg',
        password:'hashed_pass_7'
    },
    {
        user_name: 'ckimura',
        name: 'Chiyo',
        surname: 'Kimura',
        address: '963 Tokyo Ave, Tokyo',
        country: 'Japan',
        email: 'chiyo.kimura@email.com',
        phone: null,
        avatar: 'avatar12.jpg',
        password:'hashed_pass_12'
    },
    {
        user_name: 'dthompson',
        name: 'David',
        surname: 'Thompson',
        address: '486 London Rd, London',
        country: 'UK',
        email: 'david.thompson@email.com',
        phone: null,
        avatar: 'avatar15.jpg',
        password:'hashed_pass_15'
    },
    {
        user_name: 'edubois',
        name: 'Emma',
        surname: 'Dubois',
        address: '369 Paris St, Paris',
        country: 'France',
        email: 'emma.dubois@email.com',
        phone: null,
        avatar: 'avatar9.jpg',
        password:'hashed_pass_9'
    },
    {
        user_name: 'janderson',
        name: 'James',
        surname: 'Anderson',
        address: '852 Sydney St, Sydney',
        country: 'Australia',
        email: 'james.anderson@email.com',
        phone: null,
        avatar: 'avatar11.jpg',
        password:'hashed_pass_11'
    },
    {
        user_name: 'jsmith',
        name: 'John',
        surname: 'Smith',
        address: '123 Main St, New York',
        country: 'USA',
        email: 'john.smith@email.com',
        phone: null,
        avatar: 'avatar1.jpg',
        password:'hashed_pass_1'
    },
    {
        user_name: 'lwang',
        name: 'Li',
        surname: 'Wang',
        address: '321 Bamboo St, Beijing',
        country: 'China',
        email: 'li.wang@email.com',
        phone: null,
        avatar: 'avatar4.jpg',
        password:'hashed_pass_4'
    },
    {
        user_name: 'mjohnson',
        name: 'Maria',
        surname: 'Johnson',
        address: '456 Oak Ave, Los Angeles',
        country: 'USA',
        email: 'maria.johnson@email.com',
        phone: null,
        avatar: 'avatar2.jpg',
        password:'hashed_pass_2'
    },
    {
        user_name: 'mlee',
        name: 'Michael',
        surname: 'Lee',
        address: '258 Seoul Blvd, Seoul',
        country: 'South Korea',
        email: 'michael.lee@email.com',
        phone: null,
        avatar: 'avatar8.jpg',
        password:'hashed_pass_8'
    },
    {
        user_name: 'okowalski',
        name: 'Olga',
        surname: 'Kowalski',
        address: '357 Warsaw Way, Warsaw',
        country: 'Poland',
        email: 'olga.kowalski@email.com',
        phone: null,
        avatar: 'avatar14.jpg',
        password:'hashed_pass_14'
    },
    {
        user_name: 'pgarcia',
        name: 'Pablo',
        surname: 'Garcia',
        address: '789 Pine Rd, Madrid',
        country: 'Spain',
        email: 'pablo.garcia@email.com',
        phone: null,
        avatar: 'avatar3.jpg',
        password:'hashed_pass_3'
    },
    {
        user_name: 'rmuller',
        name: 'Robert',
        surname: 'Muller',
        address: '987 Berlin St, Berlin',
        country: 'Germany',
        email: 'robert.muller@email.com',
        phone: null,
        avatar: 'avatar6.jpg',
        password:'hashed_pass_6'
    },
    {
        user_name: 'sbrown',
        name: 'Sarah',
        surname: 'Brown',
        address: '654 Maple Dr, Toronto',
        country: 'Canada',
        email: 'sarah.brown@email.com',
        phone: null,
        avatar: 'avatar5.jpg',
        password:'hashed_pass_5'
    },
    {
        user_name: 'tpatel',
        name: 'Tanvi',
        surname: 'Patel',
        address: '741 Mumbai Rd, Mumbai',
        country: 'India',
        email: 'tanvi.patel@email.com',
        phone: null,
        avatar: 'avatar10.jpg',
        password:'hashed_pass_10'
    },
    {
        user_name: 'vnguyen',
        name: 'Vinh',
        surname: 'Nguyen',
        address: '159 Hanoi Ln, Hanoi',
        country: 'Vietnam',
        email: 'vinh.nguyen@email.com',
        phone: null,
        avatar: 'avatar13.jpg',
        password:'hashed_pass_13'
    },
    {
        user_name: 'yvan',
        name: 'Yvan Jaures',
        surname: 'yvano',
        address: '147 Rio Ave, Rio de Janeiro',
        country: 'Canada',
        email: 'yvanjaures@emy.com',
        phone: null,
        avatar: 'avatar7.jpg',
        password:'yvan123456'
    },
    {
        user_name: 'emma',
        name: 'Emma Raissa',
        surname: 'Emma',
        address: '147 Rio Ave, Rio de Janeiro',
        country: 'Canada',
        email: 'emmaraissa@emy.com',
        phone: null,
        avatar: 'avatar7.jpg',
        password:'emma123456'
    },
    {
        user_name: 'mathieu',
        name: 'Mathieu Larocque',
        surname: 'patate',
        address: '147 Rio Ave, Rio de Janeiro',
        country: 'Canada',
        email: 'mathieularocque@emy.com',
        phone: null,
        avatar: null,
        password:'mathieu123456'
    }
            ]
  await prisma.member.createMany({ data: members });
  console.log(`✓ ${members.length} membres insérés`);
}

// Insert Employees (15 records) - Seulement user_name et retraite
async function seedEmployees() {
  const employees = [
    { user_name: 'jsmith', retraite: false }
  ];

  await prisma.employee.createMany({ data: employees });
  console.log(`  ✓ ${employees.length} Employee(s) inséré(s)`);
}

// Insert Managers (15 records)
async function seedManagers() {
    const password='99999999'
  const manager=await prisma.manager.create({ data: {
        password:password
  } });
  console.log(`  ✓ Manager(s) inséré(s) `+manager.id_manager);
}

// Insert Types (15 records)
async function seedTypes() {
  const types = [
    { name: 'Gold Medal' },
    { name: 'Silver Medal' },
    { name: 'Bronze Medal' },
    { name: 'Trophy' },
    { name: 'Cash Prize' },
    { name: 'Gift Card' },
    { name: 'Equipment' },
    { name: 'Certificate' },
    { name: 'Scholarship' },
    { name: 'Travel Package' },
    { name: 'VIP Pass' },
    { name: 'Merchandise' },
    { name: 'Training Session' },
    { name: 'Dinner Voucher' },
    { name: 'Sponsorship Deal' }
  ];

  await prisma.type.createMany({ data: types });
  console.log(`  ✓ ${types.length} Types insérés`);
}

// =========================================
// ÉTAPE 2: Tables dépendant de Member
// =========================================

// Insert Sponsors (15 records) - Seulement user_name, company_name et title
async function seedSponsors() {
  const sponsors = [
    { user_name: 'okowalski', company_name: 'Warsaw Warriors', title: 'Chairwoman' },
    { user_name: 'dthompson', company_name: 'London League', title: 'Director of Operations' }
  ];

  await prisma.sponsor.createMany({ data: sponsors });
  console.log(`  ✓ ${sponsors.length} Sponsor(s) inséré(s)`);
}

// =========================================
// ÉTAPE 3: Tables dépendant de Manager
// =========================================

// Insert Communities (15 records)
async function seedCommunities() {
    const idManager=await prisma.manager.findFirst({
        where:{
            password:'99999999'
        }
    })
  const communities = [
    { name:'Ottawa city' ,details:'Communauté de la ville d’ottawa. Rejoins nous pour du fun!' ,avatar: 'community1.jpg', members: 150, location: 'New York, Canada', id_manager: idManager.id_manager, privacy: false },
    {  name:'Ottawa city', details:'Communauté de la ville d’ottawa. Rejoins nous pour du fun!', avatar: 'community2.jpg', members: 220, location: 'Los Angeles, Canada', id_manager: idManager.id_manager, privacy: true },
    {  name:'Ottawa city', details:'Communauté de la ville d’ottawa. Rejoins nous pour du fun!', avatar: 'community3.jpg', members: 180, location: 'Madrid, Canada', id_manager: idManager.id_manager, privacy: false }
  ];

  await prisma.community.createMany({ data: communities });
  console.log(`  ✓ ${communities.length} Communit(y/ies) insérée(s)`);
}

// =========================================
// ÉTAPE 4: Tables dépendant de Community et Member
// =========================================

// Insert Community_members (15 records)
async function seedCommunityMembers() {
    const coms=await prisma.community.findMany()
  const communityMembers = [
    { join_date: new Date('2023-01-15'), id_community: coms[0].id_community, user_name: 'jsmith' },
    { join_date: new Date('2023-02-20'), id_community: coms[1].id_community, user_name: 'mjohnson' },
    { join_date: new Date('2023-03-10'), id_community: coms[2].id_community, user_name: 'pgarcia' },
    { join_date: new Date('2023-04-05'), id_community: coms[0].id_community, user_name: 'lwang' },
    { join_date: new Date('2023-05-12'), id_community: coms[1].id_community, user_name: 'sbrown' },
    { join_date: new Date('2023-06-18'), id_community: coms[2].id_community, user_name: 'rmuller' }
  ];

  await prisma.community_member.createMany({ data: communityMembers });
  console.log(`  ✓ ${communityMembers.length} Community_member(s) inséré(s)`);
}

// Insert Admins (15 records)
async function seedAdmins() {
    const coms=await prisma.community.findMany()
  const admins = [
    { id_community: coms[0].id_community, user_name: 'sbrown' },
    { id_community: coms[1].id_community, user_name: 'rmuller' }
  ];

  await prisma.admin.createMany({ data: admins });
  console.log(`  ✓ ${admins.length} Admin(s) inséré(s)`);
}

// =========================================
// ÉTAPE 5: Tables dépendant de Admin et Community
// =========================================

// Insert Tournaments (15 records)
async function seedTournaments() {
    
    const coms=await prisma.community.findMany()
    const admins=await prisma.admin.findMany()
  const tournaments = [
    { location: 'Madison Square Garden, NY', start_date: new Date('2024-06-01'), end_date: new Date('2024-06-15'), status: 1, avatar: 'tour1.jpg', id_admin: admins[0].id_admin, id_community: coms[0].id_community, fees: 50.00 },
    { location: 'Staples Center, LA', start_date: new Date('2024-07-10'), end_date: new Date('2024-07-25'), status: 1, avatar: 'tour2.jpg', id_admin: admins[0].id_admin, id_community: coms[0].id_community, fees: 75.00 },
    { location: 'Santiago Bernabeu, Madrid', start_date: new Date('2024-08-05'), end_date: new Date('2024-08-20'), status: 2, avatar: 'tour3.jpg', id_admin: admins[0].id_admin, id_community: coms[0].id_community, fees: 60.00 },
    { location: 'Birds Nest Stadium, Beijing', start_date: new Date('2024-09-01'), end_date: new Date('2024-09-15'), status: 1, avatar: 'tour4.jpg', id_admin: admins[0].id_admin, id_community: coms[0].id_community, fees: 45.00 },
    { location: 'Rogers Centre, Toronto', start_date: new Date('2024-10-10'), end_date: new Date('2024-10-25'), status: 3, avatar: 'tour5.jpg', id_admin: admins[0].id_admin, id_community: coms[0].id_community, fees: 55.00 },
    { location: 'Olympic Stadium, Berlin', start_date: new Date('2024-11-01'), end_date: new Date('2024-11-15'), status: 1, avatar: 'tour6.jpg', id_admin: admins[0].id_admin, id_community: coms[0].id_community, fees: 65.00 }
  ];

  await prisma.tournament.createMany({ data: tournaments });
  console.log(`  ✓ ${tournaments.length} Tournament(s) inséré(s)`);
}

// =========================================
// ÉTAPE 6: Tables dépendant de Tournament
// =========================================

// Insert Players (15 records)
async function seedPlayers() {
    const tours=await prisma.tournament.findMany()
  const players = [
    { id_tour: tours[0].id_tour, user_name: 'jsmith' },
    { id_tour: tours[0].id_tour, user_name: 'mjohnson' },
    { id_tour: tours[0].id_tour, user_name: 'pgarcia' }
  ];

  await prisma.player.createMany({ data: players });
  console.log(`  ✓ ${players.length} Player(s) inséré(s)`);
}

// Insert Teams (15 records)
async function seedTeams() {
    const tours=await prisma.tournament.findMany()
  const teams = [
    { members: 5, players: 5, id_tour: tours[0].id_tour, key_team: 'TEAM001', open: true, user_name: 'jsmith' },
    { members: 6, players: 6, id_tour: tours[0].id_tour, key_team: 'TEAM002', open: false, user_name: 'mjohnson' },
    { members: 4, players: 4, id_tour: tours[0].id_tour, key_team: 'TEAM003', open: true, user_name: 'pgarcia' }
  ];

  await prisma.team.createMany({ data: teams });
  console.log(`  ✓ ${teams.length} Team(s) insérée(s)`);
}

// Insert Prizes (15 records)
async function seedPrizes() {
    const tours=await prisma.tournament.findMany()
    const types=await prisma.type.findMany()
  const prizes = [
    { name: 'First Place Prize', spots: 1, group_spot: 1, id_tour: tours[0].id_tour, id_type: types[0].id_type },
    { name: 'Runner-up Award', spots: 1, group_spot: 2, id_tour: tours[0].id_tour, id_type: types[1].id_type },
    { name: 'Third Place Medal', spots: 1, group_spot: 3, id_tour: tours[0].id_tour, id_type: types[2].id_type }
  ];

  await prisma.prize.createMany({ data: prizes });
  console.log(`  ✓ ${prizes.length} Prize(s) inséré(s)`);
}

// =========================================
// ÉTAPE 7: Tables dépendant de Team et Prize
// =========================================

// Insert Team_members (15 records)
async function seedTeamMembers() {
    const teams=await prisma.team.findMany()
  const teamMembers = [
    { id_team: teams[0].id_team, user_name: 'jsmith', status: true },
    { id_team: teams[1].id_team, user_name: 'mjohnson', status: true },
    { id_team: teams[2].id_team, user_name: 'pgarcia', status: true }
  ];

  await prisma.team_member.createMany({ data: teamMembers });
  console.log(`  ✓ ${teamMembers.length} Team_member(s) inséré(s)`);
}

// Insert Prize_sponsors (15 records)
async function seedPrizeSponsors() {
    const prizes=await prisma.prize.findMany()
  const prizeSponsors = [
    { id_prize: prizes[0].id_prize, user_name: 'dthompson' },
    { id_prize: prizes[1].id_prize, user_name: 'dthompson' },
    { id_prize: prizes[2].id_prize, user_name: 'okowalski' }
  ];

  await prisma.prize_sponsor.createMany({ data: prizeSponsors });
  console.log(`  ✓ ${prizeSponsors.length} Prize_sponsor(s) inséré(s)`);
}

// =========================================
// RÉCAPITULATIF
// =========================================

async function displaySummary() {
  console.log('\nTables remplies:');
  
  const tables = [
    { name: 'Member', model: 'member' },
    { name: 'Employee', model: 'employee' },
    { name: 'Manager', model: 'manager' },
    { name: 'Type', model: 'type' },
    { name: 'Sponsor', model: 'sponsor' },
    { name: 'Community', model: 'community' },
    { name: 'Community_member', model: 'communityMember' },
    { name: 'Admin', model: 'admin' },
    { name: 'Tournament', model: 'tournament' },
    { name: 'Player', model: 'player' },
    { name: 'Team', model: 'team' },
    { name: 'Prize', model: 'prize' },
    { name: 'Team_member', model: 'teamMember' },
    { name: 'Prize_sponsor', model: 'prizesSponsor' }
  ];

  let totalRecords = 0;
  
  for (const table of tables) {
    const count = await prisma[table.model].count();
    totalRecords += count;
    console.log(`  • ${table.name.padEnd(20)} : ${count} enregistrement(s)`);
  }
  
  console.log('');
  console.log(`Total: ${totalRecords} enregistrements insérés`);
  console.log('');
}

// Exécution du script
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });