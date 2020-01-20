module.exports = (router, database, statusCodes) => {
    router.get("/", (req, res) => {
        database.query("SELECT * FROM Responses").then(data => {
            if (data.rowsAffected[0] < 1) res.status(statusCodes.HTTP.NOT_FOUND).send(statusCodes.JSON.NO_USERS);
            res.status(statusCodes.HTTP.OK).send(Array.from(data.recordset));
        }).catch(e => console.error(e));
    });
    router.get("/:username", (req, res) => {
        let username = req.params.username;
        database.query(`SELECT * FROM Responses WHERE Username='${username}'`).then(data => {
            if (data.rowsAffected[0] < 1) res.status(statusCodes.HTTP.NOT_FOUND).send(statusCodes.JSON.UNKNOWN_USER);
        }).catch(e => console.error(e));
    });
    router.post("/:username", (req, res) => {
        let foundUsername = req.params.username;
        if (!foundUsername) return res.send(statusCodes.HTTP.OK).send(statusCodes.JSON.INVALID_USER_PARAM);
        let user = foundUsername.split("_").join(" ");

        let postData = req.body;
        if (!postData) return res.status(statusCodes.HTTP.OK).send(statusCodes.JSON.INVALID_RESPONSES_BODY);

        database.query(`INSERT INTO RESPONSES (Username, Questions) VALUES ('${user}', '${postData.responses}')`).catch(e => console.error(e));
    });
    return router;
}