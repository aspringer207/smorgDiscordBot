const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('now')
		.setDescription('Replies with a UTC timestamp in millisectonds'),
	async execute(interaction) {
		await interaction.reply(getUTCMilliseconds());
	},
};