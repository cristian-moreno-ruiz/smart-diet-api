db.createUser(
    {
        user: 'smart-diet',
        pwd: 'aGTr45Yu',
        roles: [
            {
                role: 'readWrite',
                db: 'smart-diet',
            }
        ]

    }
)