comixApp.service('DataService', ['$http', function($http) {
    var apiKeys = {
        pub: '4ce9c9807743d687f6ab3999ca885079'
        , priv: '*****'
    }
    var ts = '1';

    var hash = CryptoJS.MD5(ts + apiKeys.priv + apiKeys.pub);

    return {
        get: function(endpoint, params) {
            var queryString = '?hash=' + hash + '&apikey=' + apiKeys.pub + '&ts=' + ts + '&limit=20';
            if(params && Array.isArray(params)) {
                params.forEach(function(param) {
                    queryString += '&' + param.name + '=' + param.value;
                });
            }

            return $http.get('http://gateway.marvel.com/v1/public/' + endpoint + queryString)
                .then(function(response) {
                    return response;
                }, function(error) {
                    return error;
                });
        },

        getCharacters: function() {
            return this.get('characters');
        },

        getCharacterByName: function(character) {
            return this.get('characters', [{name: 'name', value: character}]);
        }
    };
}]);
