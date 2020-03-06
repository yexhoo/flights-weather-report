const client = require('sync-rest-client');

exports.get = (url) => {

    const weather = { data: null, error: null }

    try { weather.data = client.get(url).body }
    catch (error) { weather.error = error }
    finally { return weather }
}