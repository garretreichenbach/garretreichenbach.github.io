function getProperty(propertyName) {
    var data = JSON.parse($.getJSON('../properties-manager.json'));
    for(var property in data) {
        if(data[property] == propertyName) return property;
    }
    return null;
}