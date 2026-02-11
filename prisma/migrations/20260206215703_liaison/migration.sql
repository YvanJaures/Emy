BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Admin] (
    [id_admin] INT NOT NULL IDENTITY(1,1),
    [id_community] INT,
    [user_name] VARCHAR(50),
    CONSTRAINT [PK__Admin__89472E95DB2049D4] PRIMARY KEY CLUSTERED ([id_admin])
);

-- CreateTable
CREATE TABLE [dbo].[Community] (
    [id_community] INT NOT NULL IDENTITY(1,1),
    [avatar] VARCHAR(255),
    [members] INT,
    [location] VARCHAR(100),
    [id_manager] INT,
    [privacy] BIT,
    CONSTRAINT [PK__Communit__5EB0F0780885BDE2] PRIMARY KEY CLUSTERED ([id_community])
);

-- CreateTable
CREATE TABLE [dbo].[Community_member] (
    [id_co_member] INT NOT NULL IDENTITY(1,1),
    [join_date] DATE,
    [id_community] INT,
    [user_name] VARCHAR(50),
    CONSTRAINT [PK__Communit__E973ECDD1047C6B9] PRIMARY KEY CLUSTERED ([id_co_member])
);

-- CreateTable
CREATE TABLE [dbo].[Employee] (
    [user_name] VARCHAR(50) NOT NULL,
    [retraite] BIT,
    CONSTRAINT [PK__Employee__7C9273C569FB6D8F] PRIMARY KEY CLUSTERED ([user_name])
);

-- CreateTable
CREATE TABLE [dbo].[Manager] (
    [id_manager] INT NOT NULL IDENTITY(1,1),
    [password] VARCHAR(255),
    CONSTRAINT [PK__Manager__7F9D5D00A6100A19] PRIMARY KEY CLUSTERED ([id_manager])
);

-- CreateTable
CREATE TABLE [dbo].[Member] (
    [user_name] VARCHAR(50) NOT NULL,
    [name] VARCHAR(50),
    [surname] VARCHAR(50),
    [address] VARCHAR(100),
    [birth_date] DATE,
    [country] VARCHAR(50),
    [email] VARCHAR(100),
    [avatar] VARCHAR(255),
    [password] VARCHAR(255),
    CONSTRAINT [PK__Member__7C9273C585C5662A] PRIMARY KEY CLUSTERED ([user_name])
);

-- CreateTable
CREATE TABLE [dbo].[Player] (
    [id_player] INT NOT NULL IDENTITY(1,1),
    [id_tour] INT,
    [user_name] VARCHAR(50),
    CONSTRAINT [PK__Player__45CF72B13D626897] PRIMARY KEY CLUSTERED ([id_player])
);

-- CreateTable
CREATE TABLE [dbo].[Prize] (
    [id_prize] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(50),
    [spots] INT,
    [group_spot] INT,
    [id_tour] INT,
    [id_type] INT,
    [id_admin] INT,
    CONSTRAINT [PK__Prize__D8A0CD8857767C01] PRIMARY KEY CLUSTERED ([id_prize])
);

-- CreateTable
CREATE TABLE [dbo].[Prize_sponsor] (
    [id_prize_sponsor] INT NOT NULL IDENTITY(1,1),
    [id_prize] INT,
    [user_name] VARCHAR(50),
    CONSTRAINT [PK__Prize_sp__BFED9266AFAAE36A] PRIMARY KEY CLUSTERED ([id_prize_sponsor])
);

-- CreateTable
CREATE TABLE [dbo].[Sponsor] (
    [user_name] VARCHAR(50) NOT NULL,
    [company_name] VARCHAR(100),
    [title] VARCHAR(100),
    CONSTRAINT [PK__Sponsor__7C9273C5672D81F4] PRIMARY KEY CLUSTERED ([user_name])
);

-- CreateTable
CREATE TABLE [dbo].[Team] (
    [id_team] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(50),
    [members] INT,
    [players] INT,
    [id_tour] INT,
    [key_team] VARCHAR(50),
    [_open] BIT,
    [user_name] VARCHAR(50),
    CONSTRAINT [PK__Team__C6D204E78433FB0F] PRIMARY KEY CLUSTERED ([id_team])
);

-- CreateTable
CREATE TABLE [dbo].[Team_member] (
    [id_team_member] INT NOT NULL IDENTITY(1,1),
    [id_team] INT,
    [user_name] VARCHAR(50),
    [status] BIT,
    CONSTRAINT [PK__Team_mem__36EAACFC07AC4600] PRIMARY KEY CLUSTERED ([id_team_member])
);

-- CreateTable
CREATE TABLE [dbo].[Test] (
    [patate] VARCHAR(100),
    [yvan] VARCHAR(10)
);

-- CreateTable
CREATE TABLE [dbo].[Tournament] (
    [id_tour] INT NOT NULL IDENTITY(1,1),
    [location] VARCHAR(100),
    [start_date] DATE,
    [end_date] DATE,
    [status] INT,
    [avatar] VARCHAR(255),
    [id_admin] INT,
    [id_community] INT,
    [fees] FLOAT(53),
    CONSTRAINT [PK__Tourname__C9304CF6ECB8D893] PRIMARY KEY CLUSTERED ([id_tour])
);

-- CreateTable
CREATE TABLE [dbo].[Type] (
    [id_type] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(50),
    CONSTRAINT [PK__Type__C3F091E0EDEEA9E9] PRIMARY KEY CLUSTERED ([id_type])
);

-- AddForeignKey
ALTER TABLE [dbo].[Admin] ADD CONSTRAINT [FK__Admin__id_commun__6D0D32F4] FOREIGN KEY ([id_community]) REFERENCES [dbo].[Community]([id_community]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Admin] ADD CONSTRAINT [FK_Admin_Member] FOREIGN KEY ([user_name]) REFERENCES [dbo].[Member]([user_name]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Community] ADD CONSTRAINT [FK_Community_Manager] FOREIGN KEY ([id_manager]) REFERENCES [dbo].[Manager]([id_manager]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Community_member] ADD CONSTRAINT [FK__Community__id_co__5165187F] FOREIGN KEY ([id_community]) REFERENCES [dbo].[Community]([id_community]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Community_member] ADD CONSTRAINT [FK__Community__user___52593CB8] FOREIGN KEY ([user_name]) REFERENCES [dbo].[Member]([user_name]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Employee] ADD CONSTRAINT [FK__Employee__user_na__59063A47] FOREIGN KEY ([user_name]) REFERENCES [dbo].[Member]([user_name]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Player] ADD CONSTRAINT [FK__Player__user_nam__4CA06362] FOREIGN KEY ([user_name]) REFERENCES [dbo].[Member]([user_name]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Player] ADD CONSTRAINT [FK_Player_Tournament] FOREIGN KEY ([id_tour]) REFERENCES [dbo].[Tournament]([id_tour]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Prize] ADD CONSTRAINT [FK__Prize__id_tour__656C112C] FOREIGN KEY ([id_tour]) REFERENCES [dbo].[Tournament]([id_tour]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Prize] ADD CONSTRAINT [FK__Prize__id_type__66603565] FOREIGN KEY ([id_type]) REFERENCES [dbo].[Type]([id_type]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Prize_sponsor] ADD CONSTRAINT [FK__Prize_spo__id_pr__693CA210] FOREIGN KEY ([id_prize]) REFERENCES [dbo].[Prize]([id_prize]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Prize_sponsor] ADD CONSTRAINT [FK__Prize_spo__user___6A30C649] FOREIGN KEY ([user_name]) REFERENCES [dbo].[Sponsor]([user_name]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Sponsor] ADD CONSTRAINT [FK__Sponsor__user_na__59063A47] FOREIGN KEY ([user_name]) REFERENCES [dbo].[Member]([user_name]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Team] ADD CONSTRAINT [FK__Team__id_tour__5BE2A6F2] FOREIGN KEY ([id_tour]) REFERENCES [dbo].[Tournament]([id_tour]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Team] ADD CONSTRAINT [FK__Team__user_name__5CD6CB2B] FOREIGN KEY ([user_name]) REFERENCES [dbo].[Member]([user_name]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Team_member] ADD CONSTRAINT [FK__Team_memb__id_te__5FB337D6] FOREIGN KEY ([id_team]) REFERENCES [dbo].[Team]([id_team]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Team_member] ADD CONSTRAINT [FK__Team_memb__user___60A75C0F] FOREIGN KEY ([user_name]) REFERENCES [dbo].[Member]([user_name]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Tournament] ADD CONSTRAINT [FK_Tournament_Admin] FOREIGN KEY ([id_admin]) REFERENCES [dbo].[Admin]([id_admin]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Tournament] ADD CONSTRAINT [FK_Tournament_Community] FOREIGN KEY ([id_community]) REFERENCES [dbo].[Community]([id_community]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
