const loadRoute = route => require(`./routes/${route}`);

module.exports = (app, router, database, statusCodes) => {
    app.get("/questions", (req, res) => {
        database.query("SELECT * FROM Questions").then(data => {
            if (data.rowsAffected[0] < 1) return res.send(statusCodes.JSON.NO_QUESTIONS);
            data = Array.from(data.recordset).map(record => {
                return { question: record.Question, datePicker: record.DataPicker == 1 }
            });
            return res.send(data);
        }).catch(e => console.error(e));
    });
    app.use("/users", loadRoute("users")(router, database, statusCodes));
    app.get("*", (req, res) => res.status(statusCodes.HTTP.NOT_FOUND).send(statusCodes.JSON.UNKNOWN_ENDPOINT));
}