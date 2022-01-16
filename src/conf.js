import yaml from 'yaml';

const conf_filepath = "/comics/conf.yml";

//Parse the YAML conf into JSON
const conf = fetch(conf_filepath)
                .then(x => x.text())
                .then(x => yaml.parse(x));

export default conf;
