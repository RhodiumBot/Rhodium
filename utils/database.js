const Sequelize = require('sequelize');

module.exports.run = client => {
    console.log("This util has no run function.")
}

const database = new Sequelize('Mio', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

let Users = database.define('users', {
    user: {
        type: Sequelize.STRING(300),
        allowNull: false
    },
    name: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    commandlevel: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    credits: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    afk: {
        type: Sequelize.BOOLEAN
    },
    afkreason: {
        type: Sequelize.STRING(200)
    },
    title: {
        type: Sequelize.STRING(200)
    },
    description: {
        type: Sequelize.STRING(200)
    },
    lastclaimed: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    globalxp: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    globallvl: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    devmsgmuted: {
        type: Sequelize.BOOLEAN()
    }
});

let Badges = database.define('badges', {
    user: {
        type: Sequelize.STRING(300),
        allowNull: false
    },
    badge: {
        type: Sequelize.STRING(300),
        allowNull: false
    }
});

let ShopPurchases = database.define('shop_purchases', {
    user: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    itemid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

let ShopData = database.define('shop_data', {
    name: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
    },
    category: {
        type: Sequelize.STRING(300),
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

let Server = database.define('servers', {
    serverid: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    name: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    prefix: {
        type: Sequelize.STRING(200),
        allowNull: false
    }
});

class DB {
    static get connection(){ return database; }
    static get shoppurchases(){ return ShopPurchases; }
    static get shopdata(){ return ShopData; }
    static get user(){ return Users; }
    static get guild(){ return Server; }
    static get badges(){ return Badges; }
}

module.exports = DB;
