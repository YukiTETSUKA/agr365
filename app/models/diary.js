exports.definition = {
	config: {
		columns: {
		    "date": "date",
		    "start": "time",
		    "end": "time",
		    "workId": "integer",
		    "memo": "text"
		},
		adapter: {
			type: "sql",
			collection_name: "diary"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};