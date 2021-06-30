const Discord = require("discord.js");
const { nom, licenceImage, hebergement, ynInfo } = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (ynInfo == 1){

        message.delete();

        const infoEmbed = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle('ℹ️ Informations')
        .setDescription(nom + '\n **__est un bot concu par >\'\'SkZ™#9999 et \'\'AzK™#0667 afin d\'apporter une modératiion automatique 100% fonctionnelle.__**')
        .addField('Auteur', 'TH Déveleoppement 🥛', true)
        .addField('Licence', 'Soon... !', true)
        .addField('Hébergement', 'Soon... !')
        .addField('Credit image', licenceImage, true)
        .setThumbnail('https://cdn.discordapp.com/attachments/809553256740552734/859395907048177664/bot_icon_placeholder.png')

        const user = client.users.cache.get(message.author.id);
        user.send(infoEmbed);

        console.log("Informations demandées par " + message.author.tag);

    }

}

module.exports.help = {
    name: "info"
}
