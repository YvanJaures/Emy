export const updateTourTeams = (req,res)=>{
    const { id_tour, id_community, teams } = req.body;

    res.json({
        message:"Nombre d'équipes du tournoi modifié",
        data:{id_tour,id_community,teams}
    });
};

export const updateTourStatus = (req,res)=>{
    const { id_tour, id_community, status } = req.body;

    res.json({
        message:"Statut du tournoi modifié",
        data:{id_tour,id_community,status}
    });
};

export const deleteTeamFromTour = (req,res)=>{
    const { id_team, id_tour } = req.body;

    res.json({
        message:"Équipe retirée du tournoi",
        data:{id_team,id_tour}
    });
};

export const addAdmin = (req,res)=>{
    const { user_name, id_community } = req.body;

    res.json({
        message:"Administrateur ajouté",
        data:{user_name,id_community}
    });
};

export const deleteAdmin = (req,res)=>{
    const { id_admin, user_name, id_community } = req.body;

    res.json({
        message:"Administrateur supprimé",
        data:{id_admin,user_name,id_community}
    });
};

export const addMemberToTeam = (req,res)=>{
    const { id_team, user_name } = req.body;

    res.json({
        message: "Membre ajouté à l'équipe",
        data:{id_team,user_name}
    });
};

export const deleteMemberFromTeam = (req,res)=>{
    const { id_team, user_name } = req.body;

    res.json({
        message:"Membre retiré de l'équipe"
    });
};

export const createTour = (req,res)=>{
    res.json({
        message:"Tournoi créé",
        data:req.body
    });
};

export const createPrize = (req,res)=>{
    res.json({
        message:"Prix créé",
        data:req.body
    });
};

export const deletePrize = (req,res)=>{
    const { id_prize,id_tour } = req.body;

    res.json({
        message:"Prix supprimé"
    });
};

export const updatePrize = (req,res)=>{
    const { id_prize,id_tour,number } = req.body;

    res.json({
        message:"Prix mis à jour",
        data:{id_prize,id_tour,number}
    });
};

export const logAdminAction = (req,res)=>{
    const { id_admin,details } = req.body;

    res.json({
        message:"Action enregistrée",
        data:{id_admin,details}
    });
};