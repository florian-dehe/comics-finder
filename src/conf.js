import yaml from 'yaml';

const conf_filepath = "./conf.yml";

const conf = fetch(conf_filepath)
                .then(x => x.text())
                .then(x => yaml.parse(x));

export default conf;
