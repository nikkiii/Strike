function MpcApi() {

}

MpcApi.prototype.request = function(path, args, callback) {
	$.get(path, args, function(res) {
		if (callback) {
			callback(res);
		}
	});
};

MpcApi.prototype.setVolume = function(percent) {
	this.request('command.html', { wm_command : '[setvolumecommand]', volume : percent });
};

MpcApi.prototype.seek = function(percent) {
	this.request('command.html', { wm_command : '[setposcommand]', percent : percent });
};