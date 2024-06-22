db.createUser(
        {
            user: "root",
            pwd: "mongopwd",
            roles: [
                {
                    role: "readWrite",
                    db: "sample-database"
                }
            ]
        }
);
