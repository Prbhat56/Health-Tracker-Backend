const { User } = require("./Database");

async function insertData()
{
    const res = await User.create({
        name: "John Doe",
        email: "john@example.com",

    })

    console.log('res',res);

}

insertData()