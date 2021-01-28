// 20210127182812
// https://raw.githubusercontent.com/Margaret2/pantone-colors/master/pantone-numbers.json

// import { HEXtoHSL, HEXtoRGB } from '../color';

const { HEXtoHSL, HEXtoRGB } = require('../color');

const x = [
  {
    name: 'egret',
    rgb: [255, 255, 255, 1],
    hsa: [360, 100, 100, 1],
    hex: '#FFFFFF',
  },
];

const generatePantone = {
  '11-0103': {
    name: 'egret',
    hex: 'f3ece0',
  },
  '11-0602': {
    name: 'snow-white',
    hex: 'f2f0eb',
  },
  '11-0601': {
    name: 'bright-white',
    hex: 'f4f5f0',
  },
  '11-4201': {
    name: 'cloud-dancer',
    hex: 'f0eee9',
  },
  '11-0604': {
    name: 'gardenia',
    hex: 'f1e8df',
  },
  '11-4300': {
    name: 'marshmallow',
    hex: 'f0eee4',
  },
  '11-4800': {
    name: 'blanc-de-blanc',
    hex: 'e7e9e7',
  },
  '11-0606': {
    name: 'pristine',
    hex: 'f2e8da',
  },
  '11-0701': {
    name: 'whisper-white',
    hex: 'ede6db',
  },
  '12-0104': {
    name: 'white-asparagus',
    hex: 'e1dbc8',
  },
  '13-0905': {
    name: 'birch',
    hex: 'ddd5c7',
  },
  '12-5202': {
    name: 'turtledove',
    hex: 'ded7c8',
  },
  '12-0105': {
    name: 'bone-white',
    hex: 'd7d0c0',
  },
  '13-4403': {
    name: 'silver-birch',
    hex: 'd2cfc4',
  },
  '11-0104': {
    name: 'vanilla-ice',
    hex: 'f0eada',
  },
  '11-0107': {
    name: 'papyrus',
    hex: 'f5edd6',
  },
  '11-0105': {
    name: 'antique-white',
    hex: 'ede3d2',
  },
  '11-0507': {
    name: 'winter-white',
    hex: 'f5ecd2',
  },
  '12-0804': {
    name: 'cloud-cream',
    hex: 'e6ddc5',
  },
  '12-0605': {
    name: 'angora',
    hex: 'dfd1bb',
  },
  '12-0703': {
    name: 'seedpearl',
    hex: 'e6dac4',
  },
  '12-0815': {
    name: 'vanilla-custard',
    hex: 'f3e0be',
  },
  '12-0713': {
    name: 'almond-oil',
    hex: 'f4efc1',
  },
  '12-0812': {
    name: 'alabaster-gleam',
    hex: 'f0debd',
  },
  '12-0712': {
    name: 'vanilla',
    hex: 'f4e1c1',
  },
  '12-0806': {
    name: 'rutabaga',
    hex: 'ecddbe',
  },
  '13-0815': {
    name: 'banana-crepe',
    hex: 'e7d3ad',
  },
  '13-0917': {
    name: 'italian-straw',
    hex: 'e7d1a1',
  },
  '12-0304': {
    name: 'whitecap-gray',
    hex: 'e0d5c6',
  },
  '13-0607': {
    name: 'fog',
    hex: 'd0c5b1',
  },
  '12-0000': {
    name: 'white-swan',
    hex: 'e4d7c5',
  },
  '13-0907': {
    name: 'sandshell',
    hex: 'd8ccbb',
  },
  '12-1403': {
    name: 'tapioca',
    hex: 'dccdbc',
  },
  '13-1006': {
    name: 'creme-brulee',
    hex: 'dbccb5',
  },
  '13-0908': {
    name: 'parchment',
    hex: 'dfd1be',
  },
  '12-1106': {
    name: 'sheer-pink',
    hex: 'f6e5db',
  },
  '12-1108': {
    name: 'dew',
    hex: 'eeded1',
  },
  '11-1404': {
    name: 'powder-puff',
    hex: 'f3e0d6',
  },
  '11-0907': {
    name: 'pearled-ivory',
    hex: 'f0dfcc',
  },
  '12-0704': {
    name: 'white-smoke',
    hex: 'eddcc9',
  },
  '11-0809': {
    name: 'ecru',
    hex: 'f3dfca',
  },
  '12-0710': {
    name: 'navajo',
    hex: 'efdcc3',
  },
  '12-2103': {
    name: 'almost-mauve',
    hex: 'e7dcd9',
  },
  '11-2409': {
    name: 'delicacy',
    hex: 'f5e3e2',
  },
  '11-2309': {
    name: 'petal-pink',
    hex: 'f2e2e0',
  },
  '11-1005': {
    name: 'bridal-blush',
    hex: 'eee2dd',
  },
  '11-1306': {
    name: 'cream-pink',
    hex: 'f6e4d9',
  },
  '11-1305': {
    name: 'angel-wing',
    hex: 'f3dfd7',
  },
  '11-0603': {
    name: 'pastel-parchment',
    hex: 'e5d9d3',
  },
  '11-4202': {
    name: 'star-white',
    hex: 'efefe8',
  },
  '11-4301': {
    name: 'lily-white',
    hex: 'e2e2da',
  },
  '12-4302': {
    name: 'vaporous-gray',
    hex: 'dfddd7',
  },
  '11-4802': {
    name: 'summer-shower',
    hex: 'e5ebe3',
  },
  '11-4803': {
    name: 'ice',
    hex: 'e0e4d9',
  },
  '12-6207': {
    name: 'frost',
    hex: 'dde2d6',
  },
  '12-5201': {
    name: 'icicle',
    hex: 'dadcd0',
  },
  '11-4601': {
    name: 'bit-of-blue',
    hex: 'e2eaeb',
  },
  '11-4303': {
    name: 'mystic-blue',
    hex: 'e1e3de',
  },
  '12-4304': {
    name: 'bluewash',
    hex: 'e2e6e0',
  },
  '12-4305': {
    name: 'spa-blue',
    hex: 'd3dedf',
  },
  '11-4804': {
    name: 'lightest-sky',
    hex: 'e4eadf',
  },
  '11-4805': {
    name: 'hint-of-mint',
    hex: 'd8e8e6',
  },
  '12-5203': {
    name: 'murmur',
    hex: 'd2d8d2',
  },
  '12-4306': {
    name: 'barely-blue',
    hex: 'dde0df',
  },
  '12-4705': {
    name: 'blue-blush',
    hex: 'd6dbd9',
  },
  '12-5603': {
    name: 'zephyr-blue',
    hex: 'd3d9d1',
  },
  '12-5403': {
    name: 'blue-flower',
    hex: 'd0d9d4',
  },
  '12-5303': {
    name: 'sprout-green',
    hex: 'cbd7d2',
  },
  '11-4604': {
    name: 'billowing-sail',
    hex: 'd8e7e7',
  },
  '12-5508': {
    name: 'hushed-green',
    hex: 'd8e9e5',
  },
  '12-0910': {
    name: 'lambs-wool',
    hex: 'e5d0b1',
  },
  '14-1119': {
    name: 'winter-wheat',
    hex: 'dfc09f',
  },
  '13-0814': {
    name: 'summer-melon',
    hex: 'ead3ae',
  },
  '13-0916': {
    name: 'chamomile',
    hex: 'e8d0a7',
  },
  '12-0714': {
    name: 'cornhusk',
    hex: 'f2d6ae',
  },
  '12-0817': {
    name: 'apricot-gelato',
    hex: 'f5d7af',
  },
  '13-1009': {
    name: 'biscotti',
    hex: 'dac7ab',
  },
  '12-0311': {
    name: 'asparagus-green',
    hex: 'd2cdb4',
  },
  '13-1007': {
    name: 'oyster-white',
    hex: 'd2caaf',
  },
  '13-0711': {
    name: 'putty',
    hex: 'd4cab0',
  },
  '13-0611': {
    name: 'moth',
    hex: 'd2cbaf',
  },
  '14-1108': {
    name: 'wood-ash',
    hex: 'd7cab0',
  },
  '14-1014': {
    name: 'gravel',
    hex: 'cbbfa2',
  },
  '15-1216': {
    name: 'pale-khaki',
    hex: 'bfaf92',
  },
  '12-0404': {
    name: 'light-gray',
    hex: 'dad8c9',
  },
  '12-6204': {
    name: 'silver-green',
    hex: 'd7d7c7',
  },
  '14-6305': {
    name: 'pelican',
    hex: 'c1bcac',
  },
  '14-0105': {
    name: 'overcast',
    hex: 'c3bdab',
  },
  '14-0210': {
    name: 'tidal-foam',
    hex: 'bfb9a3',
  },
  '15-6307': {
    name: 'agate-gray',
    hex: 'b1b09f',
  },
  '14-6308': {
    name: 'alfalfa',
    hex: 'b7b59f',
  },
  '14-0108': {
    name: 'castle-wall',
    hex: 'c8c1ab',
  },
  '14-1107': {
    name: 'oyster-gray',
    hex: 'cbc1ae',
  },
  '14-0708': {
    name: 'cement',
    hex: 'c4b6a6',
  },
  '15-0309': {
    name: 'spray-green',
    hex: 'aea692',
  },
  '15-0513': {
    name: 'eucalyptus',
    hex: 'b1a992',
  },
  '16-1108': {
    name: 'twill',
    hex: 'a79b82',
  },
  '16-1110': {
    name: 'olive-gray',
    hex: 'a6997a',
  },
  '17-1109': {
    name: 'chinchilla',
    hex: '9c8e7b',
  },
  '17-1107': {
    name: 'seneca-rock',
    hex: '9a927f',
  },
  '17-0610': {
    name: 'laurel-oak',
    hex: '918c7e',
  },
  '17-1113': {
    name: 'coriander',
    hex: '938772',
  },
  '17-1009': {
    name: 'dune',
    hex: '998978',
  },
  '17-1118': {
    name: 'lead-gray',
    hex: '8a7963',
  },
  '18-0617': {
    name: 'covert-green',
    hex: '80765f',
  },
  '15-1306': {
    name: 'oxford-tan',
    hex: 'b8a99a',
  },
  '16-1105': {
    name: 'plaza-taupe',
    hex: 'aea393',
  },
  '16-1106': {
    name: 'tuffet',
    hex: 'a59788',
  },
  '17-1312': {
    name: 'silver-mink',
    hex: '9f8d7c',
  },
  '17-1310': {
    name: 'timber-wolf',
    hex: '8d8070',
  },
  '17-0808': {
    name: 'taupe-gray',
    hex: '8e7c71',
  },
  '17-1410': {
    name: 'pine-bark',
    hex: '827064',
  },
  '14-0002': {
    name: 'pumice-stone',
    hex: 'cac2b9',
  },
  '16-0906': {
    name: 'simply-taupe',
    hex: 'ad9f93',
  },
  '16-1107': {
    name: 'aluminum',
    hex: '9f9586',
  },
  '16-1407': {
    name: 'cobblestone',
    hex: 'a89a8e',
  },
  '18-1110': {
    name: 'brindle',
    hex: '82776b',
  },
  '18-1112': {
    name: 'walnut',
    hex: '776a5f',
  },
  '18-0513': {
    name: 'bungee-cord',
    hex: '696156',
  },
  '13-0401': {
    name: 'oatmeal',
    hex: 'cbc3b4',
  },
  '13-0000': {
    name: 'moonbeam',
    hex: 'cdc6bd',
  },
  '13-5304': {
    name: 'rainy-day',
    hex: 'cfc8bd',
  },
  '13-0403': {
    name: 'gray-morn',
    hex: 'cabeb5',
  },
  '14-1106': {
    name: 'peyote',
    hex: 'c5bbae',
  },
  '15-1305': {
    name: 'feather-gray',
    hex: 'b8ad9e',
  },
  '16-0806': {
    name: 'goat',
    hex: 'a89a91',
  },
  '13-0002': {
    name: 'white-sand',
    hex: 'dbd5d1',
  },
  '14-0000': {
    name: 'silver-gray',
    hex: 'c1b7b0',
  },
  '15-4503': {
    name: 'chateau-gray',
    hex: 'bbb1a8',
  },
  '16-1305': {
    name: 'string',
    hex: 'aa9f96',
  },
  '16-1406': {
    name: 'atmosphere',
    hex: 'a89c94',
  },
  '17-1210': {
    name: 'moon-rock',
    hex: '958b84',
  },
  '17-1212': {
    name: 'fungi',
    hex: '8f8177',
  },
  '14-4501': {
    name: 'silver-lining',
    hex: 'bdb6ab',
  },
  '14-4500': {
    name: 'moonstruck',
    hex: 'c2beb6',
  },
  '15-6304': {
    name: 'pussywillow-gray',
    hex: 'aeaca1',
  },
  '16-0207': {
    name: 'london-fog',
    hex: 'a29e92',
  },
  '17-0207': {
    name: 'rock-ridge',
    hex: '918c86',
  },
  '18-4105': {
    name: 'moon-mist',
    hex: '80817d',
  },
  '18-0510': {
    name: 'castor-gray',
    hex: '646762',
  },
  '14-4102': {
    name: 'glacier-gray',
    hex: 'c5c6c7',
  },
  '14-4201': {
    name: 'lunar-rock',
    hex: 'c5c5c5',
  },
  '13-4303': {
    name: 'dawn-blue',
    hex: 'cacccb',
  },
  '14-4103': {
    name: 'gray-violet',
    hex: 'bbbcbc',
  },
  '14-4203': {
    name: 'vapor-blue',
    hex: 'bebdbd',
  },
  '15-4101': {
    name: 'high-rise',
    hex: 'aeb2b5',
  },
  '16-4702': {
    name: 'limestone',
    hex: '989a98',
  },
  '15-4502': {
    name: 'silver-cloud',
    hex: 'beb7b0',
  },
  '15-0000': {
    name: 'dove',
    hex: 'b3ada7',
  },
  '16-5803': {
    name: 'flint-gray',
    hex: 'a09c98',
  },
  '16-4402': {
    name: 'drizzle',
    hex: 'a09f9c',
  },
  '17-0205': {
    name: 'elephant-skin',
    hex: '8f8982',
  },
  '17-1506': {
    name: 'cinder',
    hex: '8a7e78',
  },
  '17-1500': {
    name: 'steeple-gray',
    hex: '827e7c',
  },
  '14-4503': {
    name: 'metal',
    hex: 'babfbc',
  },
  '14-4804': {
    name: 'blue-fox',
    hex: 'b9bcb6',
  },
  '15-4003': {
    name: 'storm-gray',
    hex: 'b5bab6',
  },
  '15-4704': {
    name: 'pigeon',
    hex: 'a9afaa',
  },
  '15-4703': {
    name: 'mirage-gray',
    hex: 'abafae',
  },
  '15-4702': {
    name: 'puritan-gray',
    hex: 'a8b0ae',
  },
  '16-5904': {
    name: 'wrought-iron',
    hex: '99,9e,98',
  },
  '16-3801': {
    name: 'opal-gray',
    hex: 'a49e9e',
  },
  '17-1501': {
    name: 'wild-dove',
    hex: '8b8c89',
  },
  '17-4402': {
    name: 'neutral-gray',
    hex: '8e918f',
  },
  '18-0503': {
    name: 'gargoyle',
    hex: '686767',
  },
  '18-0000': {
    name: 'smoked-pearl',
    hex: '656466',
  },
  '18-5105': {
    name: 'sedona-sage',
    hex: '686d6c',
  },
  '18-0306': {
    name: 'gunmetal',
    hex: '5c5d5b',
  },
  '14-4002': {
    name: 'wind-chime',
    hex: 'cac5c2',
  },
  '16-0000': {
    name: 'paloma',
    hex: '9f9c99',
  },
  '18-0601': {
    name: 'charcoal-gray',
    hex: '6c6868',
  },
  '18-4005': {
    name: 'steel-gray',
    hex: '726f70',
  },
  '18-5203': {
    name: 'pewter',
    hex: '666564',
  },
  '18-0201': {
    name: 'castlerock',
    hex: '5f5e62',
  },
  '19-3908': {
    name: 'nine-iron',
    hex: '46434a',
  },
  '16-3802': {
    name: 'ash',
    hex: 'a09998',
  },
  '17-1502': {
    name: 'cloudburst',
    hex: '837f7f',
  },
  '17-0000': {
    name: 'frost-gray',
    hex: '848283',
  },
  '18-3905': {
    name: 'excalibur',
    hex: '676168',
  },
  '18-0403': {
    name: 'dark-gull-gray',
    hex: '625d5d',
  },
  '19-3905': {
    name: 'rabbit',
    hex: '5f575c',
  },
  '19-3903': {
    name: 'shale',
    hex: '4a3f41',
  },
  '17-0909': {
    name: 'fossil',
    hex: '806f63',
  },
  '19-0810': {
    name: 'major-brown',
    hex: '5b5149',
  },
  '19-0809': {
    name: 'chocolate-chip',
    hex: '685a4e',
  },
  '19-0820': {
    name: 'canteen',
    hex: '5e5347',
  },
  '18-0615': {
    name: 'stone-gray',
    hex: '685e4f',
  },
  '18-0820': {
    name: 'capers',
    hex: '695e4b',
  },
  '19-0618': {
    name: 'beech',
    hex: '5b4f3b',
  },
  '19-0822': {
    name: 'tarmac',
    hex: '5a5348',
  },
  '19-0614': {
    name: 'wren',
    hex: '4a4139',
  },
  '19-0608': {
    name: 'black-olive',
    hex: '48413b',
  },
  '19-0405': {
    name: 'beluga',
    hex: '4a4843',
  },
  '19-0506': {
    name: 'black-ink',
    hex: '44413c',
  },
  '19-0508': {
    name: 'peat',
    hex: '3b3a36',
  },
  '19-5708': {
    name: 'jet-set',
    hex: '262c2a',
  },
  '18-1306': {
    name: 'iron',
    hex: '736460',
  },
  '19-3803': {
    name: 'plum-kitten',
    hex: '625b5c',
  },
  '19-0812': {
    name: 'turkish-coffee',
    hex: '483f39',
  },
  '19-1111': {
    name: 'black-coffee',
    hex: '3b302f',
  },
  '19-1101': {
    name: 'after-dark',
    hex: '3c3535',
  },
  '19-1102': {
    name: 'licorice',
    hex: '3a3536',
  },
  '19-0000': {
    name: 'raven',
    hex: '413e3d',
  },
  '19-0303': {
    name: 'jet-black',
    hex: '2d2c2f',
  },
  '19-4205': {
    name: 'phantom',
    hex: '39373b',
  },
  '19-4005': {
    name: 'stretch-limo',
    hex: '2b2c30',
  },
  '19-4203': {
    name: 'moonless-night',
    hex: '2f2d30',
  },
  '19-4006': {
    name: 'caviar',
    hex: '292a2d',
  },
  '19-4305': {
    name: 'pirate-black',
    hex: '363838',
  },
  '19-4007': {
    name: 'anthracite',
    hex: '28282d',
  },
  '12-1009': {
    name: 'vanilla-cream',
    hex: 'f4d8c6',
  },
  '12-0811': {
    name: 'dawn',
    hex: 'ebd2b7',
  },
  '13-1010': {
    name: 'gray-sand',
    hex: 'e5ccaf',
  },
  '12-0813': {
    name: 'autumn-blonde',
    hex: 'eed0ae',
  },
  '14-1120': {
    name: 'apricot-illusion',
    hex: 'e2c4a6',
  },
  '13-1014': {
    name: 'mellow-buff',
    hex: 'd8b998',
  },
  '14-1122': {
    name: 'sheepskin',
    hex: 'dab58f',
  },
  '14-1116': {
    name: 'almond-buff',
    hex: 'ccb390',
  },
  '14-1118': {
    name: 'beige',
    hex: 'd5ba98',
  },
  '15-1225': {
    name: 'sand',
    hex: 'cca67f',
  },
  '15-1220': {
    name: 'latte',
    hex: 'c5a582',
  },
  '16-1334': {
    name: 'tan',
    hex: 'b69574',
  },
  '16-1333': {
    name: 'doe',
    hex: 'b98e68',
  },
  '17-1328': {
    name: 'indian-tan',
    hex: 'ad8567',
  },
  '15-1116': {
    name: 'safari',
    hex: 'baaa91',
  },
  '15-1213': {
    name: 'candied-ginger',
    hex: 'bfa387',
  },
  '15-1214': {
    name: 'warm-sand',
    hex: 'c5ae91',
  },
  '15-1314': {
    name: 'cuban-sand',
    hex: 'c1a68d',
  },
  '16-1320': {
    name: 'nougat',
    hex: 'b69885',
  },
  '16-1310': {
    name: 'natural',
    hex: 'aa907d',
  },
  '16-1212': {
    name: 'nomad',
    hex: 'b49f89',
  },
  '13-0513': {
    name: 'frozen-dew',
    hex: 'd8cfb2',
  },
  '13-1008': {
    name: 'bleached-sand',
    hex: 'daccb4',
  },
  '14-1112': {
    name: 'pebble',
    hex: 'cab698',
  },
  '16-0924': {
    name: 'croissant',
    hex: 'c4ab86',
  },
  '16-1010': {
    name: 'incense',
    hex: 'af9a7e',
  },
  '16-1315': {
    name: 'cornstalk',
    hex: 'a9947a',
  },
  '17-1320': {
    name: 'tannin',
    hex: 'a68a6d',
  },
  '14-0615': {
    name: 'green-haze',
    hex: 'cac4a4',
  },
  '15-1217': {
    name: 'mojave-desert',
    hex: 'c7b595',
  },
  '15-1119': {
    name: 'taos-taupe',
    hex: 'bfa77f',
  },
  '16-1324': {
    name: 'lark',
    hex: 'b89b72',
  },
  '17-1022': {
    name: 'kelp',
    hex: '988467',
  },
  '17-1028': {
    name: 'antique-bronze',
    hex: '907954',
  },
  '17-0935': {
    name: 'dull-gold',
    hex: '8a6f48',
  },
  '17-1134': {
    name: 'brown-sugar',
    hex: 'a17249',
  },
  '17-1044': {
    name: 'chipmunk',
    hex: '976f4c',
  },
  '17-1327': {
    name: 'tobacco-brown',
    hex: '9a7352',
  },
  '18-1027': {
    name: 'bison',
    hex: '6e4f3a',
  },
  '18-1048': {
    name: 'monks-robe',
    hex: '704822',
  },
  '18-1033': {
    name: 'dachshund',
    hex: '704f37',
  },
  '18-1031': {
    name: 'toffee',
    hex: '755139',
  },
  '18-1130': {
    name: 'aztec',
    hex: '7a5747',
  },
  '18-1222': {
    name: 'cocoa-brown',
    hex: '6c5043',
  },
  '18-1124': {
    name: 'partridge',
    hex: '725440',
  },
  '19-1230': {
    name: 'friar-brown',
    hex: '6e493a',
  },
  '19-1217': {
    name: 'mustang',
    hex: '684b40',
  },
  '19-1121': {
    name: 'pinecone',
    hex: '61473b',
  },
  '19-1218': {
    name: 'potting-soil',
    hex: '54392d',
  },
  '18-1022': {
    name: 'ermine',
    hex: '836b4f',
  },
  '18-1018': {
    name: 'otter',
    hex: '7f674f',
  },
  '18-0920': {
    name: 'kangaroo',
    hex: '725e,43',
  },
  '18-0928': {
    name: 'sepia',
    hex: '6b543e',
  },
  '18-0930': {
    name: 'coffee-liqueur',
    hex: '6a513b',
  },
  '19-0815': {
    name: 'desert-palm',
    hex: '5a4632',
  },
  '19-0617': {
    name: 'teak',
    hex: '655341',
  },
  '18-1015': {
    name: 'shitake',
    hex: '736253',
  },
  '18-1016': {
    name: 'cub',
    hex: '6e5c4b',
  },
  '19-1116': {
    name: 'carafe',
    hex: '5d473a',
  },
  '19-1020': {
    name: 'dark-earth',
    hex: '5c4939',
  },
  '19-0814': {
    name: 'slate-black',
    hex: '4b3d33',
  },
  '19-0912': {
    name: 'chocolate-brown',
    hex: '4e403b',
  },
  '19-0712': {
    name: 'demitasse',
    hex: '40342b',
  },
  '18-1312': {
    name: 'deep-taupe',
    hex: '7b6660',
  },
  '19-1213': {
    name: 'shopping-bag',
    hex: '5a4743',
  },
  '19-1118': {
    name: 'chestnut',
    hex: '584039',
  },
  '19-1015': {
    name: 'bracken',
    hex: '4f3f3b',
  },
  '19-1314': {
    name: 'seal-brown',
    hex: '493b39',
  },
  '19-1016': {
    name: 'java',
    hex: '433331',
  },
  '19-0915': {
    name: 'coffee-bean',
    hex: '40312f',
  },
  '12-1006': {
    name: 'mother-of-pearl',
    hex: 'e9d4c3',
  },
  '12-1007': {
    name: 'pastel-rose-tan',
    hex: 'e9d1bf',
  },
  '12-1005': {
    name: 'novelle-peach',
    hex: 'e7cfbd',
  },
  '12-0807': {
    name: 'sun-kiss',
    hex: 'ebd1bb',
  },
  '13-1011': {
    name: 'ivory-cream',
    hex: 'dac0a7',
  },
  '14-1210': {
    name: 'shifting-sand',
    hex: 'd8c0ad',
  },
  '13-1013': {
    name: 'appleblossom',
    hex: 'ddbca0',
  },
  '12-0601': {
    name: 'eggnog',
    hex: 'ece1d3',
  },
  '13-1108': {
    name: 'cream-tan',
    hex: 'e4c7b8',
  },
  '13-1106': {
    name: 'sand-dollar',
    hex: 'decdbe',
  },
  '14-1209': {
    name: 'smoke-gray',
    hex: 'cebaa8',
  },
  '15-1308': {
    name: 'doeskin',
    hex: 'bdab9b',
  },
  '15-1215': {
    name: 'sesame',
    hex: 'baa38b',
  },
  '16-1210': {
    name: 'light-taupe',
    hex: 'b19d8d',
  },
  '16-1318': {
    name: 'warm-taupe',
    hex: 'af9483',
  },
  '16-1412': {
    name: 'stucco',
    hex: 'a58d7f',
  },
  '16-1415': {
    name: 'almondine',
    hex: 'a78c8b',
  },
  '16-1414': {
    name: 'chanterelle',
    hex: 'a28776',
  },
  '17-1418': {
    name: 'ginger-snap',
    hex: '977d70',
  },
  '17-1321': {
    name: 'woodsmoke',
    hex: '947764',
  },
  '17-1319': {
    name: 'amphora',
    hex: '9f8672',
  },
  '15-1309': {
    name: 'moonlight',
    hex: 'c5b1a0',
  },
  '14-1212': {
    name: 'frappe',
    hex: 'd1b7a0',
  },
  '15-1315': {
    name: 'rugby-tan',
    hex: 'c2a594',
  },
  '16-1221': {
    name: 'roebuck',
    hex: 'b09080',
  },
  '17-1223': {
    name: 'praline',
    hex: 'ad8b75',
  },
  '17-1322': {
    name: 'burro',
    hex: '947764',
  },
  '17-1417': {
    name: 'beaver-fur',
    hex: '997867',
  },
  '14-1213': {
    name: 'toasted-almond',
    hex: 'd2b49c',
  },
  '17-1225': {
    name: 'tawny-birch',
    hex: 'ae856c',
  },
  '16-1323': {
    name: 'macaroon',
    hex: 'b38b71',
  },
  '17-1226': {
    name: 'tawny-brown',
    hex: 'ab856f',
  },
  '17-1224': {
    name: 'camel',
    hex: 'b0846a',
  },
  '16-1331': {
    name: 'toast',
    hex: 'ca9978',
  },
  '16-1327': {
    name: 'toasted-nut',
    hex: 'c08768',
  },
  '12-0911': {
    name: 'nude',
    hex: 'f2d3bc',
  },
  '12-0912': {
    name: 'tender-peach',
    hex: 'f8d5b8',
  },
  '12-0913': {
    name: 'alesan',
    hex: 'f1ceb3',
  },
  '12-0915': {
    name: 'pale-peach',
    hex: 'fed1bd',
  },
  '12-1011': {
    name: 'peach-puree',
    hex: 'efcfba',
  },
  '13-1114': {
    name: 'bellini',
    hex: 'f4c9b1',
  },
  '14-1217': {
    name: 'amberlight',
    hex: 'e2bea2',
  },
  '12-1107': {
    name: 'peach-dust',
    hex: 'f0d8cc',
  },
  '12-1008': {
    name: 'linen',
    hex: 'edd2c0',
  },
  '12-1010': {
    name: 'scallop-shell',
    hex: 'fbd8c9',
  },
  '12-1209': {
    name: 'soft-pink',
    hex: 'f2d8cd',
  },
  '13-1404': {
    name: 'pale-dogwood',
    hex: 'edcdc2',
  },
  '12-1206': {
    name: 'silver-peony',
    hex: 'e7cfc7',
  },
  '14-1307': {
    name: 'rose-dust',
    hex: 'cdb2a5',
  },
  '13-1405': {
    name: 'shell',
    hex: 'e1cfc6',
  },
  '13-1107': {
    name: 'whisper-pink',
    hex: 'dacbbe',
  },
  '12-1404': {
    name: 'pink-tint',
    hex: 'dbcbbd',
  },
  '14-1311': {
    name: 'evening-sand',
    hex: 'ddb6ab',
  },
  '15-1317': {
    name: 'sirocco',
    hex: 'c39d88',
  },
  '16-1317': {
    name: 'brush',
    hex: 'b99984',
  },
  '17-1227': {
    name: 'cafe-au-lait',
    hex: 'ae8774',
  },
  '14-1310': {
    name: 'cameo-rose',
    hex: 'd7b8ab',
  },
  '14-1312': {
    name: 'pale-blush',
    hex: 'e4bfb3',
  },
  '14-1313': {
    name: 'rose-cloud',
    hex: 'dbb0a2',
  },
  '14-1314': {
    name: 'spanish-villa',
    hex: 'dfbaa9',
  },
  '15-1316': {
    name: 'maple-sugar',
    hex: 'c9a38d',
  },
  '16-1219': {
    name: 'tuscany',
    hex: 'be9785',
  },
  '16-1422': {
    name: 'cork',
    hex: 'ba8671',
  },
  '13-1109': {
    name: 'bisque',
    hex: 'edcab5',
  },
  '15-1319': {
    name: 'almost-apricot',
    hex: 'e5b39b',
  },
  '15-1318': {
    name: 'pink-sand',
    hex: 'dfb19b',
  },
  '14-1220': {
    name: 'peach-nougat',
    hex: 'e6af91',
  },
  '15-1327': {
    name: 'peach-bloom',
    hex: 'd99b7c',
  },
  '15-1322': {
    name: 'dusty-coral',
    hex: 'd29b83',
  },
  '16-1220': {
    name: 'cafe-creme',
    hex: 'c79685',
  },
  '16-1235': {
    name: 'sandstorm',
    hex: 'bd8b69',
  },
  '16-1341': {
    name: 'butterum',
    hex: 'c68f65',
  },
  '16-1336': {
    name: 'biscuit',
    hex: 'b4835b',
  },
  '17-1137': {
    name: 'cashew',
    hex: 'a47149',
  },
  '16-1432': {
    name: 'almond',
    hex: 'a7754d',
  },
  '17-1330': {
    name: 'lion',
    hex: 'a0714f',
  },
  '18-1030': {
    name: 'thrush',
    hex: '936b4f',
  },
  '17-1230': {
    name: 'mocha-mousse',
    hex: 'a47864',
  },
  '17-1430': {
    name: 'pecan-brown',
    hex: 'a36e51',
  },
  '17-1143': {
    name: 'hazel',
    hex: 'ae7250',
  },
  '17-1336': {
    name: 'bran',
    hex: 'a66e4a',
  },
  '17-1340': {
    name: 'adobe',
    hex: 'a3623b',
  },
  '18-1142': {
    name: 'leather-brown',
    hex: '97572b',
  },
  '18-1154': {
    name: 'glazed-ginger',
    hex: '91552b',
  },
  '16-1328': {
    name: 'sandstone',
    hex: 'c48a69',
  },
  '16-1439': {
    name: 'caramel',
    hex: 'c37c54',
  },
  '17-1147': {
    name: 'amber-brown',
    hex: 'a66646',
  },
  '18-1239': {
    name: 'sierra',
    hex: '985c41',
  },
  '18-1244': {
    name: 'ginger-bread',
    hex: '8c4a2f',
  },
  '18-1140': {
    name: 'mocha-bisque',
    hex: '8c543a',
  },
  '19-1241': {
    name: 'tortoise-shell',
    hex: '754734',
  },
  '16-1332': {
    name: 'pheasant',
    hex: 'c68463',
  },
  '16-1429': {
    name: 'sunburn',
    hex: 'b37256',
  },
  '17-1436': {
    name: 'raw-sienna',
    hex: 'b9714f',
  },
  '17-1347': {
    name: 'autumn-leaf',
    hex: 'b56a4c',
  },
  '18-1450': {
    name: 'mecca-orange',
    hex: 'bd5745',
  },
  '18-1248': {
    name: 'rust',
    hex: 'b55a30',
  },
  '18-1250': {
    name: 'bombay-brown',
    hex: '9f5130',
  },
  '13-1012': {
    name: 'frosted-almond',
    hex: 'd2c2ac',
  },
  '14-1012': {
    name: 'gilded-beige',
    hex: 'b39f8d',
  },
  '15-0927': {
    name: 'pale-gold',
    hex: 'bd9865',
  },
  '16-0836': {
    name: 'rich-gold',
    hex: 'c8b273',
  },
  '16-1325': {
    name: 'copper',
    hex: 'c47e5a',
  },
  '18-1537': {
    name: 'copper-coin',
    hex: 'ba6b57',
  },
  '14-5002': {
    name: 'silver',
    hex: 'a2a2a1',
  },
  '17-1422': {
    name: 'raw-umber',
    hex: '92705f',
  },
  '18-1321': {
    name: 'brownie',
    hex: '8f7265',
  },
  '18-1314': {
    name: 'acorn',
    hex: '7e5e52',
  },
  '18-1320': {
    name: 'clove',
    hex: '876155',
  },
  '18-1229': {
    name: 'carob-brown',
    hex: '855c4c',
  },
  '18-1235': {
    name: 'russet',
    hex: '8f5f50',
  },
  '18-1137': {
    name: 'rawhide',
    hex: '86,5e,49',
  },
  '18-1433': {
    name: 'chutney',
    hex: '98594b',
  },
  '18-1441': {
    name: 'baked-clay',
    hex: '9c5642',
  },
  '18-1336': {
    name: 'copper-brown',
    hex: '9a6051',
  },
  '18-1242': {
    name: 'brown-patina',
    hex: '834f3d',
  },
  '18-1238': {
    name: 'rustic-brown',
    hex: '855141',
  },
  '18-1230': {
    name: 'coconut-shell',
    hex: '874e3c',
  },
  '19-1333': {
    name: 'sequoia',
    hex: '804839',
  },
  '19-1228': {
    name: 'root-beer',
    hex: '714a41',
  },
  '19-1235': {
    name: 'brunette',
    hex: '664238',
  },
  '19-1320': {
    name: 'sable',
    hex: '6e403c',
  },
  '19-1436': {
    name: 'cinnamon',
    hex: '6b4139',
  },
  '19-1431': {
    name: 'fudgesickle',
    hex: '63403a',
  },
  '19-1430': {
    name: 'mink',
    hex: '734b42',
  },
  '19-1220': {
    name: 'cappuccino',
    hex: '633f33',
  },
  '18-1421': {
    name: 'cognac',
    hex: '8b645a',
  },
  '18-1326': {
    name: 'nutmeg',
    hex: '7e5c54',
  },
  '19-1012': {
    name: 'french-roast',
    hex: '58423f',
  },
  '19-1420': {
    name: 'deep-mahogany',
    hex: '553b39',
  },
  '19-1321': {
    name: 'rum-raisin',
    hex: '583432',
  },
  '19-1322': {
    name: 'brown-stone',
    hex: '593c39',
  },
  '19-1317': {
    name: 'bitter-chocolate',
    hex: '503130',
  },
  '18-1425': {
    name: 'mahogany',
    hex: '824d46',
  },
  '19-1334': {
    name: 'henna',
    hex: '7c423c',
  },
  '19-1245': {
    name: 'arabian-spice',
    hex: '884332',
  },
  '19-1325': {
    name: 'hot-chocolate',
    hex: '683b39',
  },
  '19-1338': {
    name: 'russet-brown',
    hex: '743332',
  },
  '19-1331': {
    name: 'madder-brown',
    hex: '6a3331',
  },
  '19-1327': {
    name: 'andorra',
    hex: '603535',
  },
  '11-0510': {
    name: 'afterglow',
    hex: 'f3e6c9',
  },
  '11-0617': {
    name: 'transparent-yellow',
    hex: 'f4ecc2',
  },
  '12-0715': {
    name: 'double-cream',
    hex: 'f3e0ac',
  },
  '13-0822': {
    name: 'sunlight',
    hex: 'edd59e',
  },
  '13-0922': {
    name: 'straw',
    hex: 'e0c992',
  },
  '14-0935': {
    name: 'jojoba',
    hex: 'dabe81',
  },
  '14-1031': {
    name: 'rattan',
    hex: 'd1b272',
  },
  '14-1110': {
    name: 'boulder',
    hex: 'd1be9b',
  },
  '13-0715': {
    name: 'sea-mist',
    hex: 'd8c9a3',
  },
  '13-0915': {
    name: 'reed-yellow',
    hex: 'dcc99e',
  },
  '13-0613': {
    name: 'chino-green',
    hex: 'd9caa5',
  },
  '14-0925': {
    name: 'parsnip',
    hex: 'd6c69a',
  },
  '12-0619': {
    name: 'dusty-yellow',
    hex: 'd4cc9a',
  },
  '15-0719': {
    name: 'silver-fern',
    hex: 'bbaa7e',
  },
  '12-0626': {
    name: 'lemon-grass',
    hex: 'dcd494',
  },
  '13-0725': {
    name: 'raffia',
    hex: 'dac483',
  },
  '13-0624': {
    name: 'golden-mist',
    hex: 'd5cd94',
  },
  '14-0826': {
    name: 'pampas',
    hex: 'cfbb7b',
  },
  '14-0740': {
    name: 'bamboo',
    hex: 'd2b04c',
  },
  '15-0643': {
    name: 'cress-green',
    hex: 'bca949',
  },
  '16-0847': {
    name: 'olive-oil',
    hex: 'a98b2d',
  },
  '14-0626': {
    name: 'dried-moss',
    hex: 'ccb97e',
  },
  '14-0647': {
    name: 'celery',
    hex: 'cec153',
  },
  '13-0640': {
    name: 'acacia',
    hex: 'dacd65',
  },
  '14-0755': {
    name: 'sulphur',
    hex: 'ddb614',
  },
  '15-0743': {
    name: 'oil-yellow',
    hex: 'c4a647',
  },
  '16-0742': {
    name: 'green-sulphur',
    hex: 'ae8e2c',
  },
  '17-0839': {
    name: 'golden-palm',
    hex: 'aa8805',
  },
  '14-1025': {
    name: 'cocoon',
    hex: 'c9b27c',
  },
  '14-0721': {
    name: 'hemp',
    hex: 'c0ad7c',
  },
  '15-0730': {
    name: 'southern-moss',
    hex: 'bca66a',
  },
  '15-0732': {
    name: 'olivenite',
    hex: 'c1a65c',
  },
  '15-0636': {
    name: 'golden-green',
    hex: 'bdb369',
  },
  '16-0730': {
    name: 'antique-gold',
    hex: 'b59e5f',
  },
  '16-0737': {
    name: 'burnished-gold',
    hex: 'aa9855',
  },
  '12-0722': {
    name: 'french-vanilla',
    hex: 'efe1a7',
  },
  '11-0616': {
    name: 'pastel-yellow',
    hex: 'f2e6b1',
  },
  '11-0710': {
    name: 'tender-yellow',
    hex: 'ededb7',
  },
  '11-0618': {
    name: 'wax-yellow',
    hex: 'ede9ad',
  },
  '12-0721': {
    name: 'lemonade',
    hex: 'f0e79d',
  },
  '11-0620': {
    name: 'elfin-yellow',
    hex: 'eeea97',
  },
  '12-0740': {
    name: 'limelight',
    hex: 'f0e87d',
  },
  '14-0827': {
    name: 'dusky-citron',
    hex: 'e3cc81',
  },
  '14-0636': {
    name: 'muted-lime',
    hex: 'd1c87c',
  },
  '13-0632': {
    name: 'endive',
    hex: 'd2cc81',
  },
  '13-0720': {
    name: 'custard',
    hex: 'e5d68e',
  },
  '12-0633': {
    name: 'canary-yellow',
    hex: 'dfd87e',
  },
  '12-0738': {
    name: 'yellow-cream',
    hex: 'efdc75',
  },
  '13-0739': {
    name: 'cream-gold',
    hex: 'dec05f',
  },
  '12-0642': {
    name: 'aurora',
    hex: 'eddd59',
  },
  '13-0648': {
    name: 'green-sheen',
    hex: 'd9ce52',
  },
  '13-0746': {
    name: 'maize',
    hex: 'eec843',
  },
  '12-0643': {
    name: 'blazing-yellow',
    hex: 'fee715',
  },
  '12-0752': {
    name: 'buttercup',
    hex: 'fae03c',
  },
  '14-0756': {
    name: 'empire-yellow',
    hex: 'f7d000',
  },
  '13-0752': {
    name: 'lemon',
    hex: 'f3bf08',
  },
  '14-0848': {
    name: 'mimosa',
    hex: 'f0c05a',
  },
  '13-0850': {
    name: 'aspen-gold',
    hex: 'ffd662',
  },
  '13-0758': {
    name: 'dandelion',
    hex: 'ffd02e',
  },
  '13-0858': {
    name: 'vibrant-yellow',
    hex: 'ffda29',
  },
  '14-0760': {
    name: 'cyber-yellow',
    hex: 'ffd400',
  },
  '14-0852': {
    name: 'freesia',
    hex: 'f3c12c',
  },
  '13-0859': {
    name: 'lemon-chrome',
    hex: 'ffc300',
  },
  '12-0720': {
    name: 'mellow-yellow',
    hex: 'f0dd9d',
  },
  '12-0824': {
    name: 'pale-banana',
    hex: 'fae199',
  },
  '12-0825': {
    name: 'popcorn',
    hex: 'f8de8d',
  },
  '12-0727': {
    name: 'sunshine',
    hex: 'fade85',
  },
  '12-0736': {
    name: 'lemon-drop',
    hex: 'fdd878',
  },
  '13-0755': {
    name: 'primrose-yellow',
    hex: 'f6d155',
  },
  '14-0754': {
    name: 'super-lemon',
    hex: 'e4bf45',
  },
  '14-0837': {
    name: 'misted-yellow',
    hex: 'dab965',
  },
  '15-0942': {
    name: 'sauterne',
    hex: 'c5a253',
  },
  '16-0946': {
    name: 'honey',
    hex: 'ba9238',
  },
  '16-0954': {
    name: 'arrowwood',
    hex: 'bc8d1f',
  },
  '16-0953': {
    name: 'tawny-olive',
    hex: 'c4962c',
  },
  '15-0850': {
    name: 'ceylon-yellow',
    hex: 'd4ae40',
  },
  '15-0751': {
    name: 'lemon-curry',
    hex: 'cda323',
  },
  '15-1132': {
    name: 'fall-leaf',
    hex: 'c9a86a',
  },
  '16-1126': {
    name: 'antelope',
    hex: 'b19664',
  },
  '16-1133': {
    name: 'mustard-gold',
    hex: 'b08e51',
  },
  '16-0948': {
    name: 'harvest-gold',
    hex: 'b68a3a',
  },
  '16-0952': {
    name: 'nugget-gold',
    hex: 'c89720',
  },
  '15-0948': {
    name: 'golden-spice',
    hex: 'c6973f',
  },
  '15-0953': {
    name: 'golden-yellow',
    hex: 'cb8e16',
  },
  '14-1036': {
    name: 'ochre',
    hex: 'd6af66',
  },
  '16-0945': {
    name: 'tinsel',
    hex: 'c3964d',
  },
  '16-0947': {
    name: 'bright-gold',
    hex: 'cf9f52',
  },
  '15-1142': {
    name: 'honey-gold',
    hex: 'd1a054',
  },
  '16-1139': {
    name: 'amber-gold',
    hex: 'c19552',
  },
  '15-1046': {
    name: 'mineral-yellow',
    hex: 'd39c43',
  },
  '16-0950': {
    name: 'narcissus',
    hex: 'c39449',
  },
  '14-1113': {
    name: 'marzipan',
    hex: 'd8c09d',
  },
  '16-0928': {
    name: 'curry',
    hex: 'be9e6f',
  },
  '16-1326': {
    name: 'prairie-sand',
    hex: 'b59a6a',
  },
  '17-1047': {
    name: 'honey-mustard',
    hex: 'b68f52',
  },
  '17-1129': {
    name: 'wood-thrush',
    hex: 'a47d43',
  },
  '18-0940': {
    name: 'golden-brown',
    hex: '91672f',
  },
  '18-0937': {
    name: 'bronze-brown',
    hex: '825e2f',
  },
  '17-1045': {
    name: 'apple-cinnamon',
    hex: 'b0885a',
  },
  '17-1128': {
    name: 'bone-brown',
    hex: '9d7446',
  },
  '17-1125': {
    name: 'dijon',
    hex: '97754c',
  },
  '17-1036': {
    name: 'bistre',
    hex: '98754a',
  },
  '17-0942': {
    name: 'medal-bronze',
    hex: '977547',
  },
  '18-0939': {
    name: 'cumin',
    hex: '927240',
  },
  '19-1034': {
    name: 'breen',
    hex: '795d34',
  },
  '13-0840': {
    name: 'snapdragon',
    hex: 'fed777',
  },
  '13-0941': {
    name: 'banana-cream',
    hex: 'ffcf73',
  },
  '14-0850': {
    name: 'daffodil',
    hex: 'fdc04e',
  },
  '14-0846': {
    name: 'yolk-yellow',
    hex: 'e2b051',
  },
  '14-0951': {
    name: 'golden-rod',
    hex: 'e2a829',
  },
  '15-0955': {
    name: 'old-gold',
    hex: 'eca825',
  },
  '14-0957': {
    name: 'spectra-yellow',
    hex: 'f7b718',
  },
  '12-0826': {
    name: 'golden-haze',
    hex: 'fbd897',
  },
  '14-0936': {
    name: 'sahara-sun',
    hex: 'dfc08a',
  },
  '14-1038': {
    name: 'new-wheat',
    hex: 'd7b57f',
  },
  '13-0932': {
    name: 'cornsilk',
    hex: 'edc373',
  },
  '14-0847': {
    name: 'buff-yellow',
    hex: 'f1bf70',
  },
  '13-0940': {
    name: 'sunset-gold',
    hex: 'f7c46c',
  },
  '13-0939': {
    name: 'golden-cream',
    hex: 'f7b768',
  },
  '13-1025': {
    name: 'impala',
    hex: 'f8ce97',
  },
  '13-0935': {
    name: 'flax',
    hex: 'ffc87d',
  },
  '13-0945': {
    name: 'pale-marigold',
    hex: 'ffc66e',
  },
  '13-0942': {
    name: 'amber-yellow',
    hex: 'fab75a',
  },
  '14-1045': {
    name: 'amber',
    hex: 'efad55',
  },
  '14-1041': {
    name: 'golden-apricot',
    hex: 'dda758',
  },
  '14-0941': {
    name: 'beeswax',
    hex: 'eba851',
  },
  '13-0947': {
    name: 'banana',
    hex: 'fcb953',
  },
  '14-0955': {
    name: 'citrus',
    hex: 'f9ac2f',
  },
  '15-1050': {
    name: 'golden-glow',
    hex: 'd99938',
  },
  '15-1049': {
    name: 'artisans-gold',
    hex: 'f2ab46',
  },
  '16-1054': {
    name: 'sunflower',
    hex: 'd39237',
  },
  '18-0935': {
    name: 'buckthorn-brown',
    hex: 'a76f1f',
  },
  '18-0950': {
    name: 'cathay-spice',
    hex: '99642c',
  },
  '16-0940': {
    name: 'taffy',
    hex: 'c39b6a',
  },
  '16-1144': {
    name: 'oak-buff',
    hex: 'cf9c63',
  },
  '16-1143': {
    name: 'honey-yellow',
    hex: 'ca9456',
  },
  '17-1040': {
    name: 'spruce-yellow',
    hex: 'be8a4a',
  },
  '17-1048': {
    name: 'inca-gold',
    hex: 'bb7a2c',
  },
  '18-1160': {
    name: 'sudan-brown',
    hex: 'ac6b29',
  },
  '18-0933': {
    name: 'rubber',
    hex: '815b37',
  },
  '13-1016': {
    name: 'wheat',
    hex: 'dec5a5',
  },
  '13-1015': {
    name: 'honey-peach',
    hex: 'dcbd9e',
  },
  '13-1018': {
    name: 'desert-dust',
    hex: 'e3bc8e',
  },
  '12-0921': {
    name: 'golden-straw',
    hex: 'e6bd8f',
  },
  '13-1024': {
    name: 'buff',
    hex: 'ebc396',
  },
  '14-1127': {
    name: 'desert-mist',
    hex: 'e0b589',
  },
  '15-1231': {
    name: 'clay',
    hex: 'd2a172',
  },
  '12-0822': {
    name: 'golden-fleece',
    hex: 'f2d1a0',
  },
  '13-1031': {
    name: 'apricot-sherbet',
    hex: 'facd9e',
  },
  '13-1030': {
    name: 'sunburst',
    hex: 'f6c289',
  },
  '13-1027': {
    name: 'apricot-cream',
    hex: 'f1bd89',
  },
  '14-1128': {
    name: 'buff-orange',
    hex: 'ffbb7c',
  },
  '15-1145': {
    name: 'chamois',
    hex: 'f7b26a',
  },
  '14-1051': {
    name: 'warm-apricot',
    hex: 'ffb865',
  },
  '14-1050': {
    name: 'marigold',
    hex: 'fadc53',
  },
  '16-1142': {
    name: 'golden-nugget',
    hex: 'db9b59',
  },
  '15-1147': {
    name: 'butterscotch',
    hex: 'e19640',
  },
  '16-1148': {
    name: 'nugget',
    hex: 'cf8848',
  },
  '16-1342': {
    name: 'buckskin',
    hex: 'd18e54',
  },
  '16-1140': {
    name: 'yam',
    hex: 'd0893f',
  },
  '17-1046': {
    name: 'golden-oak',
    hex: 'be752d',
  },
  '15-1062': {
    name: 'gold-fusion',
    hex: 'ffb000',
  },
  '14-1064': {
    name: 'saffron',
    hex: 'ffa500',
  },
  '15-1054': {
    name: 'cadmium-yellow',
    hex: 'ee9626',
  },
  '14-1159': {
    name: 'zinnia',
    hex: 'ffa010',
  },
  '15-1058': {
    name: 'radiant-yellow',
    hex: 'fc9e21',
  },
  '15-1153': {
    name: 'apricot',
    hex: 'f19035',
  },
  '15-1150': {
    name: 'dark-cheddar',
    hex: 'e08119',
  },
  '13-1020': {
    name: 'apricot-ice',
    hex: 'fbbe99',
  },
  '14-1133': {
    name: 'apricot-nectar',
    hex: 'ecaa79',
  },
  '15-1234': {
    name: 'gold-earth',
    hex: 'dd9c6b',
  },
  '15-1237': {
    name: 'apricot-tan',
    hex: 'dd9760',
  },
  '16-1150': {
    name: 'topaz',
    hex: 'd08344',
  },
  '16-1346': {
    name: 'golden-ochre',
    hex: 'c77943',
  },
  '16-1443': {
    name: 'apricot-buff',
    hex: 'cd7e4d',
  },
  '14-1231': {
    name: 'peach-cobbler',
    hex: 'ffb181',
  },
  '14-1135': {
    name: 'salmon-buff',
    hex: 'feaa7b',
  },
  '14-1139': {
    name: 'pumpkin',
    hex: 'f5a26f',
  },
  '15-1245': {
    name: 'mock-orange',
    hex: 'ffa368',
  },
  '15-1242': {
    name: 'muskmelon',
    hex: 'ec935e',
  },
  '16-1338': {
    name: 'copper-tan',
    hex: 'de8e65',
  },
  '16-1337': {
    name: 'coral-gold',
    hex: 'd27d56',
  },
  '16-1255': {
    name: 'russet-orange',
    hex: 'e47127',
  },
  '16-1253': {
    name: 'orange-ochre',
    hex: 'dc793a',
  },
  '16-1350': {
    name: 'amberglow',
    hex: 'dc793e',
  },
  '16-1454': {
    name: 'jaffa-orange',
    hex: 'd86d39',
  },
  '17-1353': {
    name: 'apricot-orange',
    hex: 'c86b3c',
  },
  '16-1448': {
    name: 'burnt-orange',
    hex: 'c86733',
  },
  '16-1260': {
    name: 'harvest-pumpkin',
    hex: 'd56231',
  },
  '15-1160': {
    name: 'blazing-orange',
    hex: 'ffa64f',
  },
  '15-1157': {
    name: 'flame-orange',
    hex: 'fb8b23',
  },
  '15-1164': {
    name: 'bright-marigold',
    hex: 'ff8d00',
  },
  '15-1263': {
    name: 'autumn-glory',
    hex: 'ff8812',
  },
  '16-1257': {
    name: 'sun-orange',
    hex: 'f48037',
  },
  '16-1356': {
    name: 'persimmon-orange',
    hex: 'f47327',
  },
  '17-1350': {
    name: 'orange-popsicle',
    hex: 'ff7913',
  },
  '16-1343': {
    name: 'autumn-sunset',
    hex: 'f38554',
  },
  '15-1247': {
    name: 'tangerine',
    hex: 'f88f58',
  },
  '16-1357': {
    name: 'bird-of-paradise',
    hex: 'ff8c55',
  },
  '16-1359': {
    name: 'orange-peel',
    hex: 'fa7a35',
  },
  '16-1459': {
    name: 'mandarin-orange',
    hex: 'ec6a37',
  },
  '16-1462': {
    name: 'golden-poppy',
    hex: 'f56733',
  },
  '16-1364': {
    name: 'vibrant-orange',
    hex: 'ff7420',
  },
  '16-1360': {
    name: 'nectarine',
    hex: 'ff8656',
  },
  '16-1349': {
    name: 'coral-rose',
    hex: 'f3774d',
  },
  '16-1361': {
    name: 'carrot',
    hex: 'fd6f3b',
  },
  '16-1452': {
    name: 'firecracker',
    hex: 'f36944',
  },
  '17-1464': {
    name: 'red-orange',
    hex: 'f05627',
  },
  '16-1362': {
    name: 'vermillion-orange',
    hex: 'f9633b',
  },
  '17-1462': {
    name: 'flame',
    hex: 'f2552c',
  },
  '13-1026': {
    name: 'creampuff',
    hex: 'ffcda8',
  },
  '12-0917': {
    name: 'bleached-apricot',
    hex: 'fccaac',
  },
  '13-1017': {
    name: 'almond-cream',
    hex: 'f4c29f',
  },
  '14-1225': {
    name: 'beach-sand',
    hex: 'fbb995',
  },
  '13-1019': {
    name: 'cream-blush',
    hex: 'f8c19a',
  },
  '13-1022': {
    name: 'caramel-cream',
    hex: 'f4ba94',
  },
  '13-1023': {
    name: 'peach-fuzz',
    hex: 'ffbe98',
  },
  '13-1021': {
    name: 'prairie-sunset',
    hex: 'ffbb9e',
  },
  '14-1224': {
    name: 'coral-sands',
    hex: 'edaa86',
  },
  '14-1230': {
    name: 'apricot-wash',
    hex: 'fbac82',
  },
  '15-1333': {
    name: 'canyon-sunset',
    hex: 'e1927a',
  },
  '16-1340': {
    name: 'brandied-melon',
    hex: 'ce7b5b',
  },
  '16-1435': {
    name: 'carnelian',
    hex: 'ce785d',
  },
  '17-1446': {
    name: 'mango',
    hex: 'b75e41',
  },
  '14-1227': {
    name: 'peach',
    hex: 'f2a987',
  },
  '15-1239': {
    name: 'cantaloupe',
    hex: 'ffa177',
  },
  '15-1331': {
    name: 'coral-reef',
    hex: 'faa181',
  },
  '15-1334': {
    name: 'shell-coral',
    hex: 'ea9575',
  },
  '15-1340': {
    name: 'cadmium-orange',
    hex: 'f99471',
  },
  '16-1442': {
    name: 'melon',
    hex: 'fe8863',
  },
  '16-1344': {
    name: 'dusty-orange',
    hex: 'e27a53',
  },
  '16-1441': {
    name: 'arabesque',
    hex: 'd16f52',
  },
  '16-1440': {
    name: 'langoustino',
    hex: 'ca6c56',
  },
  '17-1444': {
    name: 'ginger',
    hex: 'c96551',
  },
  '16-1450': {
    name: 'flamingo',
    hex: 'df7253',
  },
  '18-1447': {
    name: 'orange-rust',
    hex: 'c25a3c',
  },
  '18-1354': {
    name: 'burnt-ochre',
    hex: 'bb4f35',
  },
  '18-1448': {
    name: 'chili',
    hex: 'be5141',
  },
  '18-1535': {
    name: 'ginger-spice',
    hex: 'b65d48',
  },
  '18-1451': {
    name: 'autumn-glaze',
    hex: 'b3573f',
  },
  '18-1343': {
    name: 'auburn',
    hex: 'a15843',
  },
  '19-1250': {
    name: 'picante',
    hex: '8d3f2d',
  },
  '18-1444': {
    name: 'tandori-spice',
    hex: '9f4440',
  },
  '18-1540': {
    name: 'cinnabar',
    hex: '9c453b',
  },
  '18-1547': {
    name: 'bossa-nova',
    hex: '973a36',
  },
  '13-1318': {
    name: 'tropical-peach',
    hex: 'ffc4b2',
  },
  '14-1219': {
    name: 'peach-parfait',
    hex: 'f8bfa8',
  },
  '14-1318': {
    name: 'coral-pink',
    hex: 'e8a798',
  },
  '14-1316': {
    name: 'dusty-pink',
    hex: 'deaa9b',
  },
  '16-1330': {
    name: 'muted-clay',
    hex: 'd29380',
  },
  '15-1523': {
    name: 'shrimp',
    hex: 'e29a86',
  },
  '17-1341': {
    name: 'tawny-orange',
    hex: 'd37f6f',
  },
  '16-1329': {
    name: 'coral-haze',
    hex: 'e38e84',
  },
  '16-1431': {
    name: 'canyon-clay',
    hex: 'ce8477',
  },
  '16-1526': {
    name: 'terra-cotta',
    hex: 'd38377',
  },
  '17-1524': {
    name: 'desert-sand',
    hex: 'bd7b74',
  },
  '18-1436': {
    name: 'light-mahogany',
    hex: 'ad6d68',
  },
  '17-1525': {
    name: 'cedar-wood',
    hex: 'a1655b',
  },
  '18-1435': {
    name: 'withered-rose',
    hex: 'a26666',
  },
  '16-1522': {
    name: 'rose-dawn',
    hex: 'c2877b',
  },
  '17-1514': {
    name: 'ash-rose',
    hex: 'b5817d',
  },
  '17-1518': {
    name: 'old-rose',
    hex: 'b47b77',
  },
  '17-1424': {
    name: 'brick-dust',
    hex: 'b07069',
  },
  '17-1520': {
    name: 'canyon-rose',
    hex: 'af6c67',
  },
  '18-1630': {
    name: 'dusty-cedar',
    hex: 'ad5d5d',
  },
  '18-1438': {
    name: 'marsala',
    hex: '964f4c',
  },
  '17-1540': {
    name: 'apricot-brandy',
    hex: 'c26a5a',
  },
  '17-1532': {
    name: 'aragon',
    hex: 'b06455',
  },
  '18-1536': {
    name: 'hot-sauce',
    hex: 'ab4f41',
  },
  '18-1346': {
    name: 'bruschetta',
    hex: 'a75949',
  },
  '18-1434': {
    name: 'etruscan-red',
    hex: 'a2574b',
  },
  '18-1443': {
    name: 'redwood',
    hex: 'a6594c',
  },
  '18-1350': {
    name: 'burnt-brick',
    hex: 'a14d3a',
  },
  '18-1629': {
    name: 'faded-rose',
    hex: 'bf6464',
  },
  '18-1648': {
    name: 'baked-apple',
    hex: 'b34646',
  },
  '18-1658': {
    name: 'pompeian-red',
    hex: 'a4292e',
  },
  '18-1449': {
    name: 'ketchup',
    hex: '9a382d',
  },
  '18-1442': {
    name: 'red-ochre',
    hex: '913832',
  },
  '18-1531': {
    name: 'barn-red',
    hex: '8f423b',
  },
  '19-1540': {
    name: 'burnt-henna',
    hex: '7e392f',
  },
  '14-1419': {
    name: 'peach-pearl',
    hex: 'ffb2a5',
  },
  '14-1418': {
    name: 'peach-melba',
    hex: 'fbbdaf',
  },
  '14-1420': {
    name: 'apricot-blush',
    hex: 'feaea5',
  },
  '14-1324': {
    name: 'peach-bud',
    hex: 'fdb2ab',
  },
  '16-1434': {
    name: 'coral-almond',
    hex: 'e29d94',
  },
  '16-1520': {
    name: 'lobster-bisque',
    hex: 'dd9289',
  },
  '16-1624': {
    name: 'lantana',
    hex: 'da7e7a',
  },
  '14-1228': {
    name: 'peach-nectar',
    hex: 'ffb59b',
  },
  '14-1323': {
    name: 'salmon',
    hex: 'faaa94',
  },
  '15-1423': {
    name: 'peach-amber',
    hex: 'fb9f93',
  },
  '15-1435': {
    name: 'desert-flower',
    hex: 'ff9687',
  },
  '15-1530': {
    name: 'peach-pink',
    hex: 'fa9a85',
  },
  '16-1529': {
    name: 'burnt-coral',
    hex: 'e9897e',
  },
  '16-1532': {
    name: 'crabapple',
    hex: 'd77e70',
  },
  '15-1433': {
    name: 'papaya-punch',
    hex: 'fca289',
  },
  '16-1543': {
    name: 'fusion-coral',
    hex: 'ff8576',
  },
  '16-1542': {
    name: 'fresh-salmon',
    hex: 'ff7f6a',
  },
  '16-1544': {
    name: 'persimmon',
    hex: 'f67866',
  },
  '16-1539': {
    name: 'coral',
    hex: 'ed7464',
  },
  '16-1546': {
    name: 'living-coral',
    hex: 'ff6f61',
  },
  '17-1656': {
    name: 'hot-coral',
    hex: 'f35b53',
  },
  '16-1632': {
    name: 'shell-pink',
    hex: 'f88180',
  },
  '16-1641': {
    name: 'georgia-peach',
    hex: 'f97272',
  },
  '16-1640': {
    name: 'sugar-coral',
    hex: 'f56c73',
  },
  '17-1647': {
    name: 'dubarry',
    hex: 'f25f66',
  },
  '17-1643': {
    name: 'porcelain-rose',
    hex: 'ea6b6a',
  },
  '17-1644': {
    name: 'spiced-coral',
    hex: 'd75c5d',
  },
  '18-1649': {
    name: 'deep-sea-coral',
    hex: 'd9615b',
  },
  '17-1635': {
    name: 'rose-of-sharon',
    hex: 'dc5b62',
  },
  '18-1651': {
    name: 'cayenne',
    hex: 'e04951',
  },
  '18-1762': {
    name: 'hibiscus',
    hex: 'dd3848',
  },
  '17-1654': {
    name: 'poinsettia',
    hex: 'cb3441',
  },
  '17-1641': {
    name: 'chrysanthemum',
    hex: 'be454f',
  },
  '17-1545': {
    name: 'cranberry',
    hex: 'bb4a4d',
  },
  '18-1643': {
    name: 'cardinal',
    hex: 'ad3e48',
  },
  '17-1456': {
    name: 'tigerlily',
    hex: 'e2583e',
  },
  '17-1558': {
    name: 'grenadine',
    hex: 'df3f32',
  },
  '17-1562': {
    name: 'mandarin-red',
    hex: 'e74a33',
  },
  '17-1564': {
    name: 'fiesta',
    hex: 'dd4132',
  },
  '17-1563': {
    name: 'cherry-tomato',
    hex: 'eb3c27',
  },
  '18-1561': {
    name: 'orange-com',
    hex: 'da321c',
  },
  '18-1445': {
    name: 'spicy-orange',
    hex: 'd73c26',
  },
  '16-1541': {
    name: 'camellia',
    hex: 'f6745f',
  },
  '16-1451': {
    name: 'nasturtium',
    hex: 'fe6347',
  },
  '17-1547': {
    name: 'emberglow',
    hex: 'ea6759',
  },
  '17-1544': {
    name: 'burnt-sienna',
    hex: 'c65d52',
  },
  '17-1553': {
    name: 'paprika',
    hex: 'ce4d42',
  },
  '18-1454': {
    name: 'red-clay',
    hex: 'c2452d',
  },
  '18-1555': {
    name: 'molten-lava',
    hex: 'b5332e',
  },
  '17-1663': {
    name: 'bittersweet',
    hex: 'd93744',
  },
  '17-1664': {
    name: 'poppy-red',
    hex: 'dc343b',
  },
  '18-1660': {
    name: 'tomato',
    hex: 'ce2939',
  },
  '18-1664': {
    name: 'fiery-red',
    hex: 'd01c1f',
  },
  '18-1662': {
    name: 'flame-scarlet',
    hex: 'cd212a',
  },
  '18-1763': {
    name: 'high-risk-red',
    hex: 'c71f2d',
  },
  '18-1550': {
    name: 'aurora-red',
    hex: 'b93a32',
  },
  '18-1652': {
    name: 'rococco-red',
    hex: 'bb363f',
  },
  '18-1661': {
    name: 'tomato-puree',
    hex: 'c53346',
  },
  '18-1764': {
    name: 'lollipop',
    hex: 'cc1c3b',
  },
  '18-1761': {
    name: 'ski-patrol',
    hex: 'bb1237',
  },
  '19-1760': {
    name: 'scarlet',
    hex: 'bc2b3d',
  },
  '19-1764': {
    name: 'lipstick-red',
    hex: 'b31a38',
  },
  '19-1762': {
    name: 'crimson',
    hex: 'ae0e36',
  },
  '19-1763': {
    name: 'racing-red',
    hex: 'bd162c',
  },
  '18-1655': {
    name: 'mars-red',
    hex: 'bc2731',
  },
  '19-1761': {
    name: 'tango-red',
    hex: 'ac0e2e',
  },
  '18-1663': {
    name: 'chinese-red',
    hex: 'be132d',
  },
  '19-1663': {
    name: 'ribbon-red',
    hex: 'b92636',
  },
  '19-1664': {
    name: 'true-red',
    hex: 'bf1932',
  },
  '19-1557': {
    name: 'chili-pepper',
    hex: '9b1b30',
  },
  '14-1714': {
    name: 'quartz-pink',
    hex: 'efa6aa',
  },
  '15-1717': {
    name: 'pink-icing',
    hex: 'eea0a6',
  },
  '14-1513': {
    name: 'blossom',
    hex: 'f2b2ae',
  },
  '14-1521': {
    name: 'peaches-n-cream',
    hex: 'f4a6a3',
  },
  '15-1621': {
    name: 'candlelight-peach',
    hex: 'f8a39d',
  },
  '16-1720': {
    name: 'strawberry-ice',
    hex: 'e78b90',
  },
  '16-1626': {
    name: 'peach-blossom',
    hex: 'de8286',
  },
  '15-1821': {
    name: 'flamingo-pink',
    hex: 'f7969e',
  },
  '16-1723': {
    name: 'confetti',
    hex: 'e6798e',
  },
  '17-1928': {
    name: 'bubblegum',
    hex: 'ea738d',
  },
  '16-1735': {
    name: 'pink-lemonade',
    hex: 'ee6d8a',
  },
  '17-1930': {
    name: 'camellia-rose',
    hex: 'eb6081',
  },
  '17-1929': {
    name: 'rapture-rose',
    hex: 'd16277',
  },
  '17-1927': {
    name: 'desert-rose',
    hex: 'cf6977',
  },
  '15-1922': {
    name: 'geranium-pink',
    hex: 'f6909d',
  },
  '15-1624': {
    name: 'conch-shell',
    hex: 'fc8f9b',
  },
  '15-1626': {
    name: 'salmon-rose',
    hex: 'ff8d94',
  },
  '16-1731': {
    name: 'strawberry-pink',
    hex: 'f57f8e',
  },
  '17-1736': {
    name: 'sunkist-coral',
    hex: 'ea6676',
  },
  '17-1744': {
    name: 'calypso-coral',
    hex: 'ee5c6c',
  },
  '16-1620': {
    name: 'tea-rose',
    hex: 'dc7178',
  },
  '17-1753': {
    name: 'geranium',
    hex: 'da3d58',
  },
  '17-1755': {
    name: 'paradise-pink',
    hex: 'e4445e',
  },
  '18-1756': {
    name: 'teaberry',
    hex: 'dc3855',
  },
  '18-1755': {
    name: 'rouge-red',
    hex: 'e24666',
  },
  '18-1754': {
    name: 'raspberry',
    hex: 'd32e5e',
  },
  '17-1842': {
    name: 'azalea',
    hex: 'd42e5b',
  },
  '18-1856': {
    name: 'virtual-pink',
    hex: 'c6174e',
  },
  '17-1740': {
    name: 'claret-red',
    hex: 'c84c61',
  },
  '18-1741': {
    name: 'raspberry-wine',
    hex: 'b63753',
  },
  '18-1852': {
    name: 'rose-red',
    hex: 'c92351',
  },
  '18-1760': {
    name: 'barberry',
    hex: 'bf1945',
  },
  '18-1945': {
    name: 'bright-rose',
    hex: 'c51959',
  },
  '19-1860': {
    name: 'persian-red',
    hex: 'a21441',
  },
  '19-1955': {
    name: 'cerise',
    hex: 'a41247',
  },
  '13-2806': {
    name: 'pink-lady',
    hex: 'efc1d6',
  },
  '14-2710': {
    name: 'lilac-sachet',
    hex: 'e9adca',
  },
  '14-2311': {
    name: 'prism-pink',
    hex: 'f0a1bf',
  },
  '15-2215': {
    name: 'begonia-pink',
    hex: 'ec9abe',
  },
  '15-2718': {
    name: 'fuchsia-pink',
    hex: 'df88b7',
  },
  '15-2214': {
    name: 'rosebloom',
    hex: 'e290b2',
  },
  '17-2520': {
    name: 'ibis-rose',
    hex: 'ca628f',
  },
  '15-2216': {
    name: 'sachet-pink',
    hex: 'f18aad',
  },
  '16-2120': {
    name: 'wild-orchid',
    hex: 'd979a2',
  },
  '15-2217': {
    name: 'aurora-pink',
    hex: 'e881a6',
  },
  '17-2120': {
    name: 'chateau-rose',
    hex: 'd2738f',
  },
  '15-1920': {
    name: 'morning-glory',
    hex: 'ee819f',
  },
  '16-2126': {
    name: 'azalea-pink',
    hex: 'e96a97',
  },
  '17-2127': {
    name: 'shocking-pink',
    hex: 'de5b8c',
  },
  '17-1937': {
    name: 'hot-pink',
    hex: 'e55982',
  },
  '17-2033': {
    name: 'fandango-pink',
    hex: 'e04f80',
  },
  '18-2120': {
    name: 'honeysuckle',
    hex: 'd94f70',
  },
  '18-2043': {
    name: 'raspberry-sorbet',
    hex: 'd2386c',
  },
  '17-1831': {
    name: 'carmine',
    hex: 'bc4869',
  },
  '17-2031': {
    name: 'fuchsia-rose',
    hex: 'c74375',
  },
  '18-2143': {
    name: 'beetroot-purple',
    hex: 'cf2d71',
  },
  '16-2124': {
    name: 'pink-carnation',
    hex: 'ed7a9e',
  },
  '17-2230': {
    name: 'carmine-rose',
    hex: 'e35b8f',
  },
  '17-2036': {
    name: 'magenta',
    hex: 'd23c77',
  },
  '18-2133': {
    name: 'pink-flambe',
    hex: 'd3507a',
  },
  '18-2436': {
    name: 'fuchsia-purple',
    hex: 'd33479',
  },
  '17-2227': {
    name: 'lilac-rose',
    hex: 'bd4275',
  },
  '18-2336': {
    name: 'very-berry',
    hex: 'b73275',
  },
  '17-2625': {
    name: 'super-pink',
    hex: 'ce6ba4',
  },
  '17-2627': {
    name: 'phlox-pink',
    hex: 'ce5e9a',
  },
  '18-2333': {
    name: 'raspberry-rose',
    hex: 'cc4385',
  },
  '17-2624': {
    name: 'rose-violet',
    hex: 'c0428a',
  },
  '18-2328': {
    name: 'fuchsia-red',
    hex: 'ab3475',
  },
  '18-2326': {
    name: 'cactus-flower',
    hex: 'a83e6c',
  },
  '18-2525': {
    name: 'magenta-haze',
    hex: '9d446e',
  },
  '11-2511': {
    name: 'shrinking-violet',
    hex: 'f4e1e6',
  },
  '12-2904': {
    name: 'primrose-pink',
    hex: 'eed4d9',
  },
  '14-1508': {
    name: 'silver-pink',
    hex: 'dcb1af',
  },
  '14-1511': {
    name: 'powder-pink',
    hex: 'ecb2b3',
  },
  '16-1617': {
    name: 'mauveglow',
    hex: 'd18489',
  },
  '16-1610': {
    name: 'brandied-apricot',
    hex: 'ca848a',
  },
  '17-1718': {
    name: 'dusty-rose',
    hex: 'ba797d',
  },
  '12-2102': {
    name: 'mauve-morn',
    hex: 'ecd6d6',
  },
  '12-2902': {
    name: 'mauve-chalk',
    hex: 'e5d0cf',
  },
  '12-1304': {
    name: 'pearl',
    hex: 'f9dbd8',
  },
  '15-1611': {
    name: 'bridal-rose',
    hex: 'd69fa2',
  },
  '15-1614': {
    name: 'blush',
    hex: 'd1969a',
  },
  '18-1634': {
    name: 'baroque-rose',
    hex: 'b35a66',
  },
  '18-1635': {
    name: 'slate-rose',
    hex: 'b45865',
  },
  '17-1537': {
    name: 'mineral-red',
    hex: 'b35457',
  },
  '18-1633': {
    name: 'garnet-rose',
    hex: 'ac4b55',
  },
  '17-1633': {
    name: 'holly-berry',
    hex: 'b44e5d',
  },
  '19-1759': {
    name: 'american-beauty',
    hex: 'a73340',
  },
  '19-1862': {
    name: 'jester-red',
    hex: '9e1030',
  },
  '19-1656': {
    name: 'rio-red',
    hex: '8a2232',
  },
  '19-1940': {
    name: 'rumba-red',
    hex: '7c2439',
  },
  '18-1631': {
    name: 'earth-red',
    hex: '95424e',
  },
  '19-1840': {
    name: 'deep-claret',
    hex: '973443',
  },
  '19-1655': {
    name: 'garnet',
    hex: '953640',
  },
  '19-1543': {
    name: 'brick-red',
    hex: '8c373e',
  },
  '19-1532': {
    name: 'rosewood',
    hex: '813639',
  },
  '19-1934': {
    name: 'tibetan-red',
    hex: '782a39',
  },
  '19-1650': {
    name: 'biking-red',
    hex: '77212e',
  },
  '18-1426': {
    name: 'apple-butter',
    hex: '844b4d',
  },
  '19-1524': {
    name: 'oxblood-red',
    hex: '70393f',
  },
  '19-1533': {
    name: 'cowhide',
    hex: '884344',
  },
  '19-1530': {
    name: 'burnt-russet',
    hex: '7e3940',
  },
  '19-1629': {
    name: 'ruby-wine',
    hex: '77333b',
  },
  '19-1726': {
    name: 'cordovan',
    hex: '702f3b',
  },
  '19-1725': {
    name: 'tawny-port',
    hex: '5c2c35',
  },
  '13-1407': {
    name: 'creole-pink',
    hex: 'f7d5cc',
  },
  '13-1504': {
    name: 'peach-blush',
    hex: 'e4ccc6',
  },
  '13-1406': {
    name: 'cloud-pink',
    hex: 'f5d1c8',
  },
  '12-1212': {
    name: 'veiled-rose',
    hex: 'f8cdc9',
  },
  '12-1207': {
    name: 'pearl-blush',
    hex: 'f4cec5',
  },
  '13-1310': {
    name: 'english-rose',
    hex: 'f4c6c3',
  },
  '14-1905': {
    name: 'lotus',
    hex: 'e2c1c0',
  },
  '11-1408': {
    name: 'rosewater',
    hex: 'f6dbd8',
  },
  '14-1309': {
    name: 'peach-whip',
    hex: 'dbbeb7',
  },
  '14-1506': {
    name: 'rose-smoke',
    hex: 'd3b4ad',
  },
  '15-1415': {
    name: 'coral-cloud',
    hex: 'e2a9a1',
  },
  '15-1512': {
    name: 'misty-rose',
    hex: 'caa39a',
  },
  '15-1516': {
    name: 'peach-beige',
    hex: 'd3a297',
  },
  '16-1516': {
    name: 'cameo-brown',
    hex: 'c08a80',
  },
  '13-1409': {
    name: 'seashell-pink',
    hex: 'f7c8c2',
  },
  '13-1408': {
    name: 'chintz-rose',
    hex: 'eec4be',
  },
  '13-1510': {
    name: 'impatiens-pink',
    hex: 'ffc4bc',
  },
  '14-1907': {
    name: 'peachskin',
    hex: 'dfb8b6',
  },
  '15-1515': {
    name: 'mellow-rose',
    hex: 'd9a6a1',
  },
  '16-1511': {
    name: 'rose-tan',
    hex: 'd19c97',
  },
  '16-1518': {
    name: 'rosette',
    hex: 'ce8e8b',
  },
  '17-1522': {
    name: 'mauvewood',
    hex: 'a75d67',
  },
  '17-1623': {
    name: 'rose-wine',
    hex: 'a4596d',
  },
  '17-1723': {
    name: 'malaga',
    hex: '9f5069',
  },
  '18-1725': {
    name: 'dry-rose',
    hex: '8c4759',
  },
  '18-1718': {
    name: 'hawthorn-rose',
    hex: '884c5e',
  },
  '18-1619': {
    name: 'maroon',
    hex: '834655',
  },
  '18-1420': {
    name: 'wild-ginger',
    hex: '7c4c53',
  },
  '19-2047': {
    name: 'sangria',
    hex: '982551',
  },
  '19-1850': {
    name: 'red-bud',
    hex: '962d49',
  },
  '18-2027': {
    name: 'beaujolais',
    hex: '80304c',
  },
  '19-2033': {
    name: 'anemone',
    hex: '842c48',
  },
  '19-2030': {
    name: 'beet-red',
    hex: '7a1f3d',
  },
  '19-2025': {
    name: 'red-plum',
    hex: '7c2946',
  },
  '19-2024': {
    name: 'rhododendron',
    hex: '722b3f',
  },
  '12-2906': {
    name: 'barely-pink',
    hex: 'f8d7dd',
  },
  '12-1310': {
    name: 'blushing-bride',
    hex: 'fbd3d9',
  },
  '12-2905': {
    name: 'cradle-pink',
    hex: 'edd0dd',
  },
  '13-2803': {
    name: 'pale-lilac',
    hex: 'e1c6cc',
  },
  '13-1904': {
    name: 'chalk-pink',
    hex: 'e6c5ca',
  },
  '12-2903': {
    name: 'light-lilac',
    hex: 'dec6d3',
  },
  '14-2305': {
    name: 'pink-nectar',
    hex: 'd8aab7',
  },
  '12-1305': {
    name: 'heavenly-pink',
    hex: 'f4dede',
  },
  '13-2004': {
    name: 'potpourri',
    hex: 'e7c9ca',
  },
  '12-1605': {
    name: 'crystal-pink',
    hex: 'edd0ce',
  },
  '12-1706': {
    name: 'pink-dogwood',
    hex: 'f7d1d1',
  },
  '12-1708': {
    name: 'crystal-rose',
    hex: 'fdc3c6',
  },
  '13-2005': {
    name: 'strawberry-cream',
    hex: 'f4c3c4',
  },
  '13-1513': {
    name: 'gossamer-pink',
    hex: 'fac8c3',
  },
  '13-1906': {
    name: 'rose-shadow',
    hex: 'f9c2cd',
  },
  '13-2010': {
    name: 'orchid-pink',
    hex: 'f3bbca',
  },
  '13-2006': {
    name: 'almond-blossom',
    hex: 'f5bec7',
  },
  '14-1909': {
    name: 'coral-blush',
    hex: 'e6b2b8',
  },
  '14-1911': {
    name: 'candy-pink',
    hex: 'f5b0bd',
  },
  '15-1816': {
    name: 'peony',
    hex: 'ed9ca8',
  },
  '15-1912': {
    name: 'sea-pink',
    hex: 'de98ab',
  },
  '16-2215': {
    name: 'cashmere-rose',
    hex: 'ce879f',
  },
  '16-1715': {
    name: 'wild-rose',
    hex: 'ce8498',
  },
  '15-2210': {
    name: 'orchid-smoke',
    hex: 'd294aa',
  },
  '16-1712': {
    name: 'polignac',
    hex: 'c28799',
  },
  '16-1708': {
    name: 'lilas',
    hex: 'b88995',
  },
  '16-2111': {
    name: 'mauve-orchid',
    hex: 'b58299',
  },
  '16-2107': {
    name: 'orchid-haze',
    hex: 'b0879b',
  },
  '13-2804': {
    name: 'parfait-pink',
    hex: 'e9c3cf',
  },
  '13-2805': {
    name: 'pink-mist',
    hex: 'e6bccd',
  },
  '14-2307': {
    name: 'cameo-pink',
    hex: 'dba9b8',
  },
  '14-2808': {
    name: 'sweet-lilac',
    hex: 'e8b5ce',
  },
  '14-3207': {
    name: 'pink-lavender',
    hex: 'd9afca',
  },
  '14-3209': {
    name: 'pastel-lavender',
    hex: 'd8a1c4',
  },
  '15-3214': {
    name: 'orchid',
    hex: 'd198c5',
  },
  '15-2913': {
    name: 'lilac-chiffon',
    hex: 'de9bc4',
  },
  '16-2614': {
    name: 'moonlite-mauve',
    hex: 'd28fb0',
  },
  '16-3118': {
    name: 'cyclamen',
    hex: 'd687ba',
  },
  '16-3116': {
    name: 'opera-mauve',
    hex: 'ca80b1',
  },
  '16-3115': {
    name: 'crocus',
    hex: 'c67fae',
  },
  '17-3014': {
    name: 'mulberry',
    hex: 'a76c97',
  },
  '18-3025': {
    name: 'striking-purple',
    hex: '94,4e,87',
  },
  '16-3320': {
    name: 'violet',
    hex: 'c17fb5',
  },
  '17-3323': {
    name: 'iris-orchid',
    hex: 'a767a2',
  },
  '18-3224': {
    name: 'radiant-orchid',
    hex: 'ad5e99',
  },
  '17-3020': {
    name: 'spring-crocus',
    hex: 'ba69a1',
  },
  '18-3230': {
    name: 'meadow-mauve',
    hex: 'a9568c',
  },
  '18-3015': {
    name: 'amethyst',
    hex: '864d75',
  },
  '19-2428': {
    name: 'magenta-purple',
    hex: '6b264b',
  },
  '17-3023': {
    name: 'rosebud',
    hex: 'b65f9a',
  },
  '18-3027': {
    name: 'purple-orchid',
    hex: 'ad4d8c',
  },
  '19-2434': {
    name: 'festival-fuchsia',
    hex: '9e2c6a',
  },
  '18-2527': {
    name: 'baton-rouge',
    hex: '973c6c',
  },
  '19-2431': {
    name: 'boysenberry',
    hex: '85325c',
  },
  '19-2432': {
    name: 'raspberry-radiance',
    hex: '802a50',
  },
  '19-2430': {
    name: 'purple-potion',
    hex: '692746',
  },
  '17-2617': {
    name: 'dahlia-mauve',
    hex: 'a64f82',
  },
  '18-3339': {
    name: 'vivid-viola',
    hex: '993c7c',
  },
  '19-2630': {
    name: 'wild-aster',
    hex: '92316f',
  },
  '18-3022': {
    name: 'deep-orchid',
    hex: '903f75',
  },
  '18-2320': {
    name: 'clover',
    hex: '8a3371',
  },
  '18-2929': {
    name: 'purple-wine',
    hex: '8c3573',
  },
  '19-2924': {
    name: 'hollyhock',
    hex: '823270',
  },
  '18-3331': {
    name: 'hyacinth-violet',
    hex: '8d4687',
  },
  '18-3324': {
    name: 'dahlia',
    hex: '843e,83',
  },
  '19-3336': {
    name: 'sparkling-grape',
    hex: '773376',
  },
  '19-3138': {
    name: 'byzantium',
    hex: '853b7b',
  },
  '19-2820': {
    name: 'phlox',
    hex: '692d5d',
  },
  '19-3230': {
    name: 'grape-juice',
    hex: '682961',
  },
  '19-3022': {
    name: 'gloxinia',
    hex: '622e5a',
  },
  '13-3801': {
    name: 'crystal-gray',
    hex: 'd7cbc4',
  },
  '14-1305': {
    name: 'mushroom',
    hex: 'bdaca3',
  },
  '16-1509': {
    name: 'shadow-gray',
    hex: 'bba5a0',
  },
  '16-1703': {
    name: 'sphinx',
    hex: 'ab9895',
  },
  '16-1506': {
    name: 'bark',
    hex: 'a99592',
  },
  '16-1510': {
    name: 'fawn',
    hex: 'ae9490',
  },
  '16-1508': {
    name: 'adobe-rose',
    hex: 'ba9f99',
  },
  '15-1607': {
    name: 'pale-mauve',
    hex: 'c6a4a4',
  },
  '16-1806': {
    name: 'woodrose',
    hex: 'ae8c8e',
  },
  '16-1707': {
    name: 'deauville-mauve',
    hex: 'af9294',
  },
  '18-1807': {
    name: 'twilight-mauve',
    hex: '8b6f70',
  },
  '18-1612': {
    name: 'rose-taupe',
    hex: '806062',
  },
  '18-1512': {
    name: 'rose-brown',
    hex: '80565b',
  },
  '18-1616': {
    name: 'roan-rouge',
    hex: '885157',
  },
  '17-1510': {
    name: 'antler',
    hex: '957a76',
  },
  '18-1409': {
    name: 'peppercorn',
    hex: '6c5656',
  },
  '19-1606': {
    name: 'raisin',
    hex: '524144',
  },
  '19-1620': {
    name: 'huckleberry',
    hex: '5b4349',
  },
  '19-1621': {
    name: 'catawba-grape',
    hex: '5d3c43',
  },
  '19-1518': {
    name: 'puce',
    hex: '503938',
  },
  '19-1619': {
    name: 'fudge',
    hex: '493338',
  },
  '15-1511': {
    name: 'mahogany-rose',
    hex: 'c5a193',
  },
  '17-1516': {
    name: 'burlwood',
    hex: '9b716b',
  },
  '18-1415': {
    name: 'marron',
    hex: '6e4c4b',
  },
  '19-1625': {
    name: 'decadent-chocolate',
    hex: '513235',
  },
  '19-1521': {
    name: 'red-mahogany',
    hex: '60373d',
  },
  '19-1623': {
    name: 'vineyard-wine',
    hex: '58363d',
  },
  '19-2118': {
    name: 'winetasting',
    hex: '492a34',
  },
  '19-1525': {
    name: 'port',
    hex: '663336',
  },
  '19-1526': {
    name: 'chocolate-truffle',
    hex: '612e,35',
  },
  '19-1617': {
    name: 'burgundy',
    hex: '64313e',
  },
  '19-1522': {
    name: 'zinfandel',
    hex: '5c2935',
  },
  '19-1528': {
    name: 'windsor-wine',
    hex: '582b36',
  },
  '19-1627': {
    name: 'port-royale',
    hex: '502b33',
  },
  '19-1718': {
    name: 'fig',
    hex: '532d3b',
  },
  '15-2706': {
    name: 'violet-ice',
    hex: 'c2acb1',
  },
  '15-1905': {
    name: 'burnished-lilac',
    hex: 'c5aeb1',
  },
  '15-2705': {
    name: 'keepsake-lilac',
    hex: 'c0a5ae',
  },
  '16-3205': {
    name: 'mauve-shadows',
    hex: 'b598a3',
  },
  '15-2205': {
    name: 'dawn-pink',
    hex: 'bfa3af',
  },
  '14-3204': {
    name: 'fragrant-lilac',
    hex: 'ceadbe',
  },
  '15-3207': {
    name: 'mauve-mist',
    hex: 'c49bd4',
  },
  '17-1608': {
    name: 'heather-rose',
    hex: 'ad6d7f',
  },
  '17-1818': {
    name: 'red-violet',
    hex: 'a35776',
  },
  '17-1612': {
    name: 'mellow-mauve',
    hex: '996378',
  },
  '17-1710': {
    name: 'bordeaux',
    hex: '96637b',
  },
  '18-1720': {
    name: 'violet-quartz',
    hex: '8b4963',
  },
  '18-1716': {
    name: 'damson',
    hex: '854c65',
  },
  '19-2410': {
    name: 'amaranth',
    hex: '6f3c56',
  },
  '15-1906': {
    name: 'zephyr',
    hex: 'c89fa5',
  },
  '17-1610': {
    name: 'dusky-orchid',
    hex: '9a7182',
  },
  '18-2109': {
    name: 'grape-shake',
    hex: '886971',
  },
  '17-1511': {
    name: 'wistful-mauve',
    hex: '946c74',
  },
  '18-1709': {
    name: 'tulipwood',
    hex: '805466',
  },
  '18-1710': {
    name: 'grape-nectar',
    hex: '8d5c74',
  },
  '18-3011': {
    name: 'argyle-purple',
    hex: '895c79',
  },
  '17-1512': {
    name: 'nostalgia-rose',
    hex: 'a4777e',
  },
  '17-1614': {
    name: 'deco-rose',
    hex: '985f68',
  },
  '18-1613': {
    name: 'renaissance-rose',
    hex: '865560',
  },
  '18-1614': {
    name: 'nocturne',
    hex: '7a4b56',
  },
  '18-1418': {
    name: 'crushed-berry',
    hex: '804f5a',
  },
  '19-2312': {
    name: 'crushed-violets',
    hex: '643a4c',
  },
  '19-1716': {
    name: 'mauve-wine',
    hex: '5b3644',
  },
  '18-1411': {
    name: 'plum-wine',
    hex: '674550',
  },
  '19-2311': {
    name: 'eggplant',
    hex: '613f4c',
  },
  '19-2014': {
    name: 'prune',
    hex: '603749',
  },
  '19-1608': {
    name: 'prune-purple',
    hex: '5c3a4d',
  },
  '19-2315': {
    name: 'grape-wine',
    hex: '5a2f43',
  },
  '19-2514': {
    name: 'italian-plum',
    hex: '533146',
  },
  '19-2520': {
    name: 'potent-purple',
    hex: '462639',
  },
  '16-3310': {
    name: 'lavender-herb',
    hex: 'b18eaa',
  },
  '16-3307': {
    name: 'lavender-mist',
    hex: 'ae90a7',
  },
  '17-3410': {
    name: 'valerian',
    hex: '9f7a93',
  },
  '18-3220': {
    name: 'very-grape',
    hex: '927288',
  },
  '18-3211': {
    name: 'grapeade',
    hex: '85677b',
  },
  '18-3012': {
    name: 'purple-gumdrop',
    hex: '7a596f',
  },
  '18-3013': {
    name: 'berry-conserve',
    hex: '765269',
  },
  '18-3418': {
    name: 'chinese-violet',
    hex: '835e,81',
  },
  '18-3522': {
    name: 'crushed-grape',
    hex: '7a547f',
  },
  '18-3218': {
    name: 'concord-grape',
    hex: '7c5379',
  },
  '19-3424': {
    name: 'sunset-purple',
    hex: '6f456e',
  },
  '19-3325': {
    name: 'wood-violet',
    hex: '75406a',
  },
  '19-3223': {
    name: 'purple-passion',
    hex: '683d62',
  },
  '19-2524': {
    name: 'dark-purple',
    hex: '582147',
  },
  '18-3415': {
    name: 'grape-jam',
    hex: '725671',
  },
  '19-3323': {
    name: 'deep-purple',
    hex: '50314c',
  },
  '19-2814': {
    name: 'wineberry',
    hex: '5a395b',
  },
  '19-3518': {
    name: 'grape-royale',
    hex: '4f2d54',
  },
  '19-3218': {
    name: 'plum-purple',
    hex: '51304e',
  },
  '19-2009': {
    name: 'hortensia',
    hex: '553b50',
  },
  '19-2816': {
    name: 'blackberry-wine',
    hex: '4d3246',
  },
  '19-3714': {
    name: 'navy-cosmos',
    hex: '503b53',
  },
  '19-3215': {
    name: 'indigo',
    hex: '4c3957',
  },
  '19-3519': {
    name: 'purple-pennant',
    hex: '432c47',
  },
  '19-3316': {
    name: 'plum-perfect',
    hex: '473442',
  },
  '19-3619': {
    name: 'sweet-grape',
    hex: '4b3b4f',
  },
  '19-3217': {
    name: 'shadow-purple',
    hex: '4e334e',
  },
  '19-3520': {
    name: 'blackberry-cordial',
    hex: '3f2a47',
  },
  '19-3620': {
    name: 'purple-reign',
    hex: '56456b',
  },
  '19-3722': {
    name: 'mulberry-purple',
    hex: '493c62',
  },
  '19-3720': {
    name: 'gothic-grape',
    hex: '473951',
  },
  '19-3728': {
    name: 'grape',
    hex: '433455',
  },
  '19-3617': {
    name: 'mysterioso',
    hex: '46394b',
  },
  '19-3725': {
    name: 'purple-velvet',
    hex: '41354d',
  },
  '19-3712': {
    name: 'nightshade',
    hex: '433748',
  },
  '13-3802': {
    name: 'orchid-tint',
    hex: 'dbd2db',
  },
  '13-3803': {
    name: 'lilac-ash',
    hex: 'd7cdcd',
  },
  '13-3804': {
    name: 'gray-lilac',
    hex: 'd4cacd',
  },
  '14-3803': {
    name: 'hushed-violet',
    hex: 'd1c0bf',
  },
  '15-3802': {
    name: 'cloud-gray',
    hex: 'b7a9ac',
  },
  '17-1505': {
    name: 'quail',
    hex: '98868c',
  },
  '17-3808': {
    name: 'nirvana',
    hex: 'a2919b',
  },
  '13-3805': {
    name: 'orchid-hush',
    hex: 'cec3d2',
  },
  '14-3805': {
    name: 'iris',
    hex: 'baafbc',
  },
  '16-3304': {
    name: 'sea-fog',
    hex: 'a5929d',
  },
  '17-1605': {
    name: 'elderberry',
    hex: '9d848e',
  },
  '18-1706': {
    name: 'black-plum',
    hex: '6c5765',
  },
  '18-1405': {
    name: 'flint',
    hex: '705861',
  },
  '19-1624': {
    name: 'sassafras',
    hex: '54353b',
  },
  '14-3904': {
    name: 'evening-haze',
    hex: 'bdb8c7',
  },
  '14-3907': {
    name: 'thistle',
    hex: 'b9b3c5',
  },
  '17-3910': {
    name: 'lavender-gray',
    hex: '9890a2',
  },
  '17-3906': {
    name: 'minimal-gray',
    hex: '948d99',
  },
  '17-3810': {
    name: 'purple-ash',
    hex: '8f8395',
  },
  '18-3710': {
    name: 'gray-ridge',
    hex: '847986',
  },
  '18-3712': {
    name: 'purple-sage',
    hex: '75697e',
  },
  '16-3812': {
    name: 'heirloom-lilac',
    hex: '9d96b2',
  },
  '16-3810': {
    name: 'wisteria',
    hex: 'a198af',
  },
  '17-3812': {
    name: 'dusk',
    hex: '897f98',
  },
  '17-3817': {
    name: 'daybreak',
    hex: '8981a0',
  },
  '18-3812': {
    name: 'cadet',
    hex: '6a6378',
  },
  '18-3714': {
    name: 'mulled-grape',
    hex: '675a74',
  },
  '19-3716': {
    name: 'purple-plumeria',
    hex: '473854',
  },
  '14-3903': {
    name: 'lilac-marble',
    hex: 'c3babf',
  },
  '15-0703': {
    name: 'ashes-of-roses',
    hex: 'b5acab',
  },
  '16-3803': {
    name: 'gull-gray',
    hex: 'a49ca0',
  },
  '17-2601': {
    name: 'zinc',
    hex: '92898a',
  },
  '17-3802': {
    name: 'gull',
    hex: '918c8f',
  },
  '18-1703': {
    name: 'shark',
    hex: '6d636b',
  },
  '18-1404': {
    name: 'sparrow',
    hex: '69595c',
  },
  '13-3406': {
    name: 'orchid-ice',
    hex: 'e0d0db',
  },
  '13-3405': {
    name: 'lilac-snow',
    hex: 'e0c7d7',
  },
  '14-3206': {
    name: 'winsome-orchid',
    hex: 'd4b9cb',
  },
  '15-3508': {
    name: 'fair-orchid',
    hex: 'c0aac0',
  },
  '15-3507': {
    name: 'lavender-frost',
    hex: 'bdabbe',
  },
  '14-3710': {
    name: 'orchid-petal',
    hex: 'bfb4cb',
  },
  '14-3812': {
    name: 'pastel-lilac',
    hex: 'bdb0d0',
  },
  '14-3612': {
    name: 'orchid-bloom',
    hex: 'c5aecf',
  },
  '15-3412': {
    name: 'orchid-bouquet',
    hex: 'd1acce',
  },
  '16-3521': {
    name: 'lupine',
    hex: 'be9cc1',
  },
  '16-3416': {
    name: 'violet-tulle',
    hex: 'c193c0',
  },
  '16-3617': {
    name: 'sheer-lilac',
    hex: 'b793c0',
  },
  '16-3520': {
    name: 'african-violet',
    hex: 'b085b7',
  },
  '17-3313': {
    name: 'dusty-lavender',
    hex: 'a1759c',
  },
  '17-3730': {
    name: 'paisley-purple',
    hex: '8b79b1',
  },
  '17-3619': {
    name: 'hyacinth',
    hex: '936ca7',
  },
  '17-3628': {
    name: 'amethyst-orchid',
    hex: '926aa6',
  },
  '18-3533': {
    name: 'dewberry',
    hex: '8b5987',
  },
  '18-3520': {
    name: 'purple-heart',
    hex: '745587',
  },
  '19-3526': {
    name: 'meadow-violet',
    hex: '764f82',
  },
  '19-3642': {
    name: 'royal-purple',
    hex: '603f83',
  },
  '18-3633': {
    name: 'deep-lavender',
    hex: '775496',
  },
  '18-3531': {
    name: 'royal-lilac',
    hex: '774d8e',
  },
  '19-3542': {
    name: 'pansy',
    hex: '653d7c',
  },
  '19-3438': {
    name: 'bright-violet',
    hex: '784384',
  },
  '19-3536': {
    name: 'amaranth-purple',
    hex: '6a397b',
  },
  '19-3540': {
    name: 'purple-magic',
    hex: '663271',
  },
  '19-3220': {
    name: 'plum',
    hex: '5a315d',
  },
  '18-3615': {
    name: 'imperial-palace',
    hex: '604e7a',
  },
  '18-3518': {
    name: 'patrician-purple',
    hex: '6c4e79',
  },
  '19-3622': {
    name: 'loganberry',
    hex: '5a4769',
  },
  '19-3514': {
    name: 'majesty',
    hex: '593761',
  },
  '19-3528': {
    name: 'imperial-purple',
    hex: '542c5d',
  },
  '19-3640': {
    name: 'crown-jewel',
    hex: '482d54',
  },
  '19-3731': {
    name: 'parachute-purple',
    hex: '392852',
  },
  '13-3820': {
    name: 'lavender-fog',
    hex: 'd2c4d6',
  },
  '15-3620': {
    name: 'lavendula',
    hex: 'bca4cb',
  },
  '15-3817': {
    name: 'lavender',
    hex: 'afa4ce',
  },
  '17-3725': {
    name: 'bougainvillea',
    hex: '9884b9',
  },
  '16-3823': {
    name: 'violet-tulip',
    hex: '9e91c3',
  },
  '17-3615': {
    name: 'chalk-violet',
    hex: '8f7da5',
  },
  '18-3718': {
    name: 'purple-haze',
    hex: '807396',
  },
  '16-3110': {
    name: 'smoky-grape',
    hex: 'b88aac',
  },
  '16-3525': {
    name: 'regal-orchid',
    hex: 'a98baf',
  },
  '16-3815': {
    name: 'viola',
    hex: 'a692ba',
  },
  '17-3612': {
    name: 'orchid-mist',
    hex: '917798',
  },
  '18-3513': {
    name: 'grape-compote',
    hex: '6b5876',
  },
  '18-3715': {
    name: 'montana-grape',
    hex: '6c5971',
  },
  '18-3410': {
    name: 'vintage-violet',
    hex: '634f62',
  },
  '17-3826': {
    name: 'aster-purple',
    hex: '7d74a8',
  },
  '17-3834': {
    name: 'dahlia-purple',
    hex: '7e6eac',
  },
  '18-3737': {
    name: 'passion-flower',
    hex: '6d5698',
  },
  '18-3838': {
    name: 'ultra-violet',
    hex: '5f4b8b',
  },
  '19-3748': {
    name: 'prism-violet',
    hex: '53357d',
  },
  '19-3737': {
    name: 'heliotrope',
    hex: '4f3872',
  },
  '19-3632': {
    name: 'petunia',
    hex: '4f3466',
  },
  '18-3828': {
    name: 'corsican-blue',
    hex: '646093',
  },
  '18-3834': {
    name: 'veronica',
    hex: '6d6695',
  },
  '18-3943': {
    name: 'blue-iris',
    hex: '5a5b9f',
  },
  '18-3840': {
    name: 'purple-opulence',
    hex: '60569a',
  },
  '19-3730': {
    name: 'gentian-violet',
    hex: '544275',
  },
  '19-3850': {
    name: 'liberty',
    hex: '4d448a',
  },
  '19-3847': {
    name: 'deep-blue',
    hex: '44377d',
  },
  '18-3930': {
    name: 'bleached-denim',
    hex: '646f9b',
  },
  '18-3817': {
    name: 'heron',
    hex: '62617e',
  },
  '19-3936': {
    name: 'skipper-blue',
    hex: '484a72',
  },
  '19-3832': {
    name: 'navy-blue',
    hex: '403f6f',
  },
  '19-3842': {
    name: 'deep-wisteria',
    hex: '443f6f',
  },
  '19-3839': {
    name: 'blue-ribbon',
    hex: '3a395f',
  },
  '19-3830': {
    name: 'astral-aura',
    hex: '363151',
  },
  '13-4105': {
    name: 'lilac-hint',
    hex: 'd0d0da',
  },
  '15-3807': {
    name: 'misty-lilac',
    hex: 'bcb4c4',
  },
  '14-3905': {
    name: 'lavender-blue',
    hex: 'c5c0d0',
  },
  '14-3911': {
    name: 'purple-heather',
    hex: 'bab8d3',
  },
  '15-3909': {
    name: 'cosmic-sky',
    hex: 'aaaac4',
  },
  '15-3910': {
    name: 'languid-lavender',
    hex: 'a2a1ba',
  },
  '16-3907': {
    name: 'dapple-gray',
    hex: '9c9ba7',
  },
  '16-3931': {
    name: 'sweet-lavender',
    hex: '9a9bc1',
  },
  '16-3925': {
    name: 'easter-egg',
    hex: '919bc9',
  },
  '17-3930': {
    name: 'jacaranda',
    hex: '848dc5',
  },
  '17-3932': {
    name: 'deep-periwinkle',
    hex: '7c83bc',
  },
  '18-3833': {
    name: 'dusted-peri',
    hex: '696ba0',
  },
  '18-3944': {
    name: 'violet-storm',
    hex: '5c619d',
  },
  '18-3946': {
    name: 'baja-blue',
    hex: '5f6db0',
  },
  '16-3930': {
    name: 'thistle-down',
    hex: '9499bb',
  },
  '17-3925': {
    name: 'persian-violet',
    hex: '8c8eb2',
  },
  '18-3820': {
    name: 'twilight-purple',
    hex: '66648b',
  },
  '19-3947': {
    name: 'orient-blue',
    hex: '47457a',
  },
  '19-3951': {
    name: 'clematis-blue',
    hex: '363b7c',
  },
  '19-3955': {
    name: 'royal-blue',
    hex: '3d428b',
  },
  '18-3963': {
    name: 'spectrum-blue',
    hex: '3d3c7c',
  },
  '17-3924': {
    name: 'lavender-violet',
    hex: '767ba5',
  },
  '17-3922': {
    name: 'blue-ice',
    hex: '70789b',
  },
  '18-3927': {
    name: 'velvet-morning',
    hex: '60688d',
  },
  '18-3932': {
    name: 'marlin',
    hex: '515b87',
  },
  '19-3939': {
    name: 'blueprint',
    hex: '2d3359',
  },
  '19-3940': {
    name: 'blue-depths',
    hex: '263056',
  },
  '19-3933': {
    name: 'medieval-blue',
    hex: '29304e',
  },
  '16-3911': {
    name: 'lavender-aura',
    hex: '9f99aa',
  },
  '17-3917': {
    name: 'stonewash',
    hex: '74809a',
  },
  '19-3919': {
    name: 'nightshadow-blue',
    hex: '4e5368',
  },
  '19-3928': {
    name: 'blue-indigo',
    hex: '49516d',
  },
  '19-3915': {
    name: 'graystone',
    hex: '4d495b',
  },
  '19-3926': {
    name: 'crown-blue',
    hex: '464b65',
  },
  '19-3935': {
    name: 'deep-cobalt',
    hex: '404466',
  },
  '13-4110': {
    name: 'arctic-ice',
    hex: 'bfc7d6',
  },
  '14-4106': {
    name: 'gray-dawn',
    hex: 'bbc1cc',
  },
  '14-4110': {
    name: 'heather',
    hex: 'b7c0d6',
  },
  '16-3919': {
    name: 'eventide',
    hex: '959eb7',
  },
  '17-4030': {
    name: 'silver-lake-blue',
    hex: '618bb9',
  },
  '17-3936': {
    name: 'blue-bonnet',
    hex: '6384b8',
  },
  '18-3937': {
    name: 'blue-yonder',
    hex: '5a77a8',
  },
  '16-3920': {
    name: 'lavender-lustre',
    hex: '8c9cc1',
  },
  '17-3919': {
    name: 'purple-impression',
    hex: '858fb1',
  },
  '16-3929': {
    name: 'grapemist',
    hex: '8398ca',
  },
  '15-3930': {
    name: 'vista-blue',
    hex: '81a0d4',
  },
  '16-4031': {
    name: 'cornflower-blue',
    hex: '7391c8',
  },
  '17-3934': {
    name: 'persian-jewel',
    hex: '6e81be',
  },
  '18-3935': {
    name: 'wedgewood',
    hex: '6479b3',
  },
  '14-4112': {
    name: 'skyway',
    hex: 'adbed3',
  },
  '14-4115': {
    name: 'cashmere-blue',
    hex: 'a5b8d0',
  },
  '14-4121': {
    name: 'blue-bell',
    hex: '93b4d7',
  },
  '15-3920': {
    name: 'placid-blue',
    hex: '8cadd3',
  },
  '16-4020': {
    name: 'della-robbia-blue',
    hex: '7a9dcb',
  },
  '16-4032': {
    name: 'provence',
    hex: '658dc6',
  },
  '17-4037': {
    name: 'ultramarine',
    hex: '5b7ebd',
  },
  '16-4021': {
    name: 'allure',
    hex: '7291b4',
  },
  '17-3923': {
    name: 'colony-blue',
    hex: '65769a',
  },
  '18-4027': {
    name: 'moonlight-blue',
    hex: '506886',
  },
  '18-3928': {
    name: 'dutch-blue',
    hex: '4a638d',
  },
  '19-4039': {
    name: 'delft',
    hex: '3d5e8c',
  },
  '19-4044': {
    name: 'limoges',
    hex: '243f6c',
  },
  '19-4027': {
    name: 'estate-blue',
    hex: '233658',
  },
  '17-4015': {
    name: 'infinity',
    hex: '6e7e99',
  },
  '18-3921': {
    name: 'bijou-blue',
    hex: '4e5e7f',
  },
  '18-3920': {
    name: 'coastal-fjord',
    hex: '505d7e',
  },
  '19-4030': {
    name: 'true-navy',
    hex: '3f5277',
  },
  '19-4026': {
    name: 'ensign-blue',
    hex: '384c67',
  },
  '19-4118': {
    name: 'dark-denim',
    hex: '35465e',
  },
  '19-4028': {
    name: 'insignia-blue',
    hex: '2f3e55',
  },
  '15-4319': {
    name: 'air-blue',
    hex: '77acc7',
  },
  '16-4127': {
    name: 'heritage-blue',
    hex: '5d96bc',
  },
  '15-4323': {
    name: 'ethereal-blue',
    hex: '5ca6ce',
  },
  '16-4134': {
    name: 'bonnie-blue',
    hex: '539ccc',
  },
  '17-4131': {
    name: 'cendre-blue',
    hex: '3e7fa5',
  },
  '18-4036': {
    name: 'parisian-blue',
    hex: '4f7ca4',
  },
  '18-4232': {
    name: 'faience',
    hex: '2a6a8b',
  },
  '15-4225': {
    name: 'alaskan-blue',
    hex: '6da9d2',
  },
  '16-4132': {
    name: 'little-boy-blue',
    hex: '6ea2d5',
  },
  '17-4139': {
    name: 'azure-blue',
    hex: '4d91c6',
  },
  '17-4027': {
    name: 'riviera',
    hex: '5879a2',
  },
  '18-4029': {
    name: 'federal-blue',
    hex: '43628b',
  },
  '18-4041': {
    name: 'star-sapphire',
    hex: '386192',
  },
  '19-4037': {
    name: 'bright-cobalt',
    hex: '385d8d',
  },
  '16-4120': {
    name: 'dusk-blue',
    hex: '7ba0c0',
  },
  '18-4039': {
    name: 'regatta',
    hex: '487ab7',
  },
  '18-4043': {
    name: 'palace-blue',
    hex: '346cb0',
  },
  '18-4051': {
    name: 'strong-blue',
    hex: '1f5da0',
  },
  '19-4053': {
    name: 'turkish-sea',
    hex: '195190',
  },
  '19-4056': {
    name: 'olympian-blue',
    hex: '1a4c8b',
  },
  '19-4052': {
    name: 'classic-blue',
    hex: '0f4c81',
  },
  '17-4041': {
    name: 'marina',
    hex: '4f84c4',
  },
  '18-4141': {
    name: 'campanula',
    hex: '3272af',
  },
  '18-4045': {
    name: 'daphne',
    hex: '0f5f9a',
  },
  '18-4148': {
    name: 'victoria-blue',
    hex: '08589d',
  },
  '19-4049': {
    name: 'snorkel-blue',
    hex: '034f84',
  },
  '19-4050': {
    name: 'nautical-blue',
    hex: '1a5091',
  },
  '19-4150': {
    name: 'princess-blue',
    hex: '00539c',
  },
  '18-3949': {
    name: 'dazzling-blue',
    hex: '3850a0',
  },
  '18-3945': {
    name: 'amparo-blue',
    hex: '4960a8',
  },
  '19-3950': {
    name: 'deep-ultramarine',
    hex: '384883',
  },
  '19-3952': {
    name: 'surf-the-web',
    hex: '203c7f',
  },
  '19-3864': {
    name: 'mazarine-blue',
    hex: '273c76',
  },
  '19-4057': {
    name: 'true-blue',
    hex: '1e4477',
  },
  '19-3938': {
    name: 'twilight-blue',
    hex: '313d64',
  },
  '15-3915': {
    name: 'kentucky-blue',
    hex: 'a5b3cc',
  },
  '15-4020': {
    name: 'cerulean',
    hex: '9bb7d4',
  },
  '14-4214': {
    name: 'powder-blue',
    hex: '96b3d2',
  },
  '16-4019': {
    name: 'forever-blue',
    hex: '899bb8',
  },
  '17-3915': {
    name: 'tempest',
    hex: '79839b',
  },
  '17-3918': {
    name: 'country-blue',
    hex: '717f9b',
  },
  '17-3920': {
    name: 'english-manor',
    hex: '7181a4',
  },
  '13-4103': {
    name: 'illusion-blue',
    hex: 'c9d3dc',
  },
  '13-4304': {
    name: 'ballad-blue',
    hex: 'c0ceda',
  },
  '13-4308': {
    name: 'baby-blue',
    hex: 'b5c7d3',
  },
  '14-4210': {
    name: 'celestial-blue',
    hex: 'a3b4c4',
  },
  '15-4008': {
    name: 'blue-fog',
    hex: '9babbb',
  },
  '18-3916': {
    name: 'flint-stone',
    hex: '677283',
  },
  '18-3910': {
    name: 'folkstone-gray',
    hex: '626879',
  },
  '14-4206': {
    name: 'pearl-blue',
    hex: 'b0b7be',
  },
  '17-4405': {
    name: 'monument',
    hex: '84898c',
  },
  '19-4220': {
    name: 'dark-slate',
    hex: '46515a',
  },
  '19-4110': {
    name: 'midnight-navy',
    hex: '34414e',
  },
  '19-4010': {
    name: 'total-eclipse',
    hex: '2c313d',
  },
  '19-4015': {
    name: 'blue-graphite',
    hex: '323137',
  },
  '19-4013': {
    name: 'dark-navy',
    hex: '232f36',
  },
  '13-4404': {
    name: 'ice-flow',
    hex: 'c6d2d2',
  },
  '15-4305': {
    name: 'quarry',
    hex: '98a0a5',
  },
  '17-5102': {
    name: 'griffin',
    hex: '8d8f8f',
  },
  '19-3906': {
    name: 'dark-shadow',
    hex: '4a4b4d',
  },
  '19-4014': {
    name: 'ombre-blue',
    hex: '434854',
  },
  '19-4019': {
    name: 'india-ink',
    hex: '3c3f4a',
  },
  '19-4104': {
    name: 'ebony',
    hex: '41424a',
  },
  '19-3925': {
    name: 'patriot-blue',
    hex: '363756',
  },
  '19-3810': {
    name: 'eclipse',
    hex: '343148',
  },
  '19-4025': {
    name: 'mood-indigo',
    hex: '353a4c',
  },
  '19-3920': {
    name: 'peacoat',
    hex: '2b2e43',
  },
  '19-3921': {
    name: 'black-iris',
    hex: '2b3042',
  },
  '19-4024': {
    name: 'dress-blues',
    hex: '2a3244',
  },
  '19-4023': {
    name: 'blue-nights',
    hex: '363b48',
  },
  '15-4105': {
    name: 'angel-falls',
    hex: 'a3bdd3',
  },
  '15-4005': {
    name: 'dream-blue',
    hex: 'a0bcd0',
  },
  '16-4013': {
    name: 'ashley-blue',
    hex: '8699ab',
  },
  '16-4010': {
    name: 'dusty-blue',
    hex: '8c9dad',
  },
  '19-4227': {
    name: 'indian-teal',
    hex: '3c586b',
  },
  '19-4316': {
    name: 'stargazer',
    hex: '39505c',
  },
  '19-4229': {
    name: 'orion-blue',
    hex: '3e4f5c',
  },
  '15-4312': {
    name: 'forget-me-not',
    hex: '8fadbd',
  },
  '17-4021': {
    name: 'faded-denim',
    hex: '798ea4',
  },
  '17-4020': {
    name: 'blue-shadow',
    hex: '66829a',
  },
  '18-3922': {
    name: 'coronet-blue',
    hex: '59728e',
  },
  '18-4020': {
    name: 'captains-blue',
    hex: '557088',
  },
  '18-4025': {
    name: 'copen-blue',
    hex: '516b84',
  },
  '18-3918': {
    name: 'china-blue',
    hex: '546477',
  },
  '17-4320': {
    name: 'adriatic-blue',
    hex: '5c899b',
  },
  '18-4220': {
    name: 'provincial-blue',
    hex: '5c798e',
  },
  '17-4123': {
    name: 'niagara',
    hex: '5487a4',
  },
  '17-4023': {
    name: 'blue-heaven',
    hex: '5b7e98',
  },
  '18-4026': {
    name: 'stellar',
    hex: '46647e',
  },
  '18-4018': {
    name: 'real-teal',
    hex: '405d73',
  },
  '19-4125': {
    name: 'majolica-blue',
    hex: '274357',
  },
  '12-4609': {
    name: 'starlight-blue',
    hex: 'b5ced4',
  },
  '14-4307': {
    name: 'winter-sky',
    hex: 'a9c0cb',
  },
  '14-4508': {
    name: 'stratosphere',
    hex: '9ec1cc',
  },
  '15-4309': {
    name: 'sterling-blue',
    hex: 'a2b9c2',
  },
  '16-4109': {
    name: 'arona',
    hex: '879ba3',
  },
  '17-4111': {
    name: 'citadel',
    hex: '748995',
  },
  '18-4215': {
    name: 'blue-mirage',
    hex: '5c6d7c',
  },
  '14-4306': {
    name: 'cloud-blue',
    hex: 'a2b6b9',
  },
  '14-4506': {
    name: 'ether',
    hex: '9eb6b8',
  },
  '16-4414': {
    name: 'cameo-blue',
    hex: '769da6',
  },
  '16-4114': {
    name: 'stone-blue',
    hex: '829ca5',
  },
  '16-4411': {
    name: 'tourmaline',
    hex: '86a1a9',
  },
  '17-4412': {
    name: 'smoke-blue',
    hex: '6d8994',
  },
  '18-4217': {
    name: 'bluestone',
    hex: '577284',
  },
  '14-4313': {
    name: 'aquamarine',
    hex: '9dc3d4',
  },
  '14-4318': {
    name: 'sky-blue',
    hex: '8abad3',
  },
  '15-4415': {
    name: 'milky-blue',
    hex: '72a8ba',
  },
  '15-4421': {
    name: 'blue-grotto',
    hex: '5cacce',
  },
  '15-4427': {
    name: 'norse-blue',
    hex: '4ca5c7',
  },
  '16-4530': {
    name: 'aquarius',
    hex: '3cadd4',
  },
  '16-4525': {
    name: 'maui-blue',
    hex: '52a2b4',
  },
  '16-4421': {
    name: 'blue-mist',
    hex: '5bacc3',
  },
  '15-4720': {
    name: 'river-blue',
    hex: '38afcd',
  },
  '16-4529': {
    name: 'cyan-blue',
    hex: '14a3c7',
  },
  '16-4427': {
    name: 'horizon-blue',
    hex: '289dbe',
  },
  '17-4328': {
    name: 'blue-moon',
    hex: '3686a0',
  },
  '17-4427': {
    name: 'bluejay',
    hex: '157ea0',
  },
  '18-4334': {
    name: 'mediterranean-blue',
    hex: '1478a7',
  },
  '14-4522': {
    name: 'bachelor-button',
    hex: '4abbd5',
  },
  '16-4535': {
    name: 'blue-atoll',
    hex: '00b1d2',
  },
  '17-4432': {
    name: 'vivid-blue',
    hex: '0088b0',
  },
  '17-4540': {
    name: 'hawaiian-ocean',
    hex: '008db9',
  },
  '17-4440': {
    name: 'blue-danube',
    hex: '0087b6',
  },
  '18-4535': {
    name: 'blue-jewel',
    hex: '007baa',
  },
  '18-4537': {
    name: 'methyl-blue',
    hex: '0074a8',
  },
  '17-4435': {
    name: 'malibu-blue',
    hex: '008cc1',
  },
  '17-4336': {
    name: 'blithe',
    hex: '0084bd',
  },
  '18-4330': {
    name: 'swedish-blue',
    hex: '007eb1',
  },
  '17-4433': {
    name: 'dresden-blue',
    hex: '0086bb',
  },
  '17-4247': {
    name: 'diva-blue',
    hex: '007bb2',
  },
  '18-4252': {
    name: 'blue-aster',
    hex: '0077b3',
  },
  '18-4440': {
    name: 'cloisonne',
    hex: '0075af',
  },
  '18-4140': {
    name: 'french-blue',
    hex: '0072b5',
  },
  '18-4247': {
    name: 'brilliant-blue',
    hex: '0075b3',
  },
  '18-4244': {
    name: 'directoire-blue',
    hex: '0061a3',
  },
  '19-4151': {
    name: 'skydiver',
    hex: '00589b',
  },
  '19-4245': {
    name: 'imperial-blue',
    hex: '005a92',
  },
  '18-4032': {
    name: 'deep-water',
    hex: '266691',
  },
  '19-4035': {
    name: 'dark-blue',
    hex: '305679',
  },
  '12-4607': {
    name: 'pastel-blue',
    hex: 'bcd3d5',
  },
  '12-4608': {
    name: 'clearwater',
    hex: 'aad5db',
  },
  '13-4409': {
    name: 'blue-glow',
    hex: 'b2d4dd',
  },
  '13-4809': {
    name: 'plume',
    hex: 'a5cfd5',
  },
  '14-4512': {
    name: 'porcelain-blue',
    hex: '95c0cb',
  },
  '13-4411': {
    name: 'crystal-blue',
    hex: 'a1c8db',
  },
  '14-4516': {
    name: 'petit-four',
    hex: '87c2d4',
  },
  '12-4805': {
    name: 'wan-blue',
    hex: 'cbdcdf',
  },
  '12-4610': {
    name: 'whispering-blue',
    hex: 'c9dcdc',
  },
  '12-4604': {
    name: 'skylight',
    hex: 'c8e0e0',
  },
  '14-4510': {
    name: 'aquatic',
    hex: '99c1cc',
  },
  '15-4712': {
    name: 'marine-blue',
    hex: '76afb6',
  },
  '16-4612': {
    name: 'reef-waters',
    hex: '6f9fa9',
  },
  '17-4911': {
    name: 'arctic',
    hex: '648589',
  },
  '12-4806': {
    name: 'chalk-blue',
    hex: 'ccdad7',
  },
  '13-4804': {
    name: 'pale-blue',
    hex: 'c4d6d3',
  },
  '13-4405': {
    name: 'misty-blue',
    hex: 'bfcdcc',
  },
  '14-4504': {
    name: 'sky-gray',
    hex: 'bcc8c6',
  },
  '14-4807': {
    name: 'surf-spray',
    hex: 'b4c8c2',
  },
  '15-4706': {
    name: 'gray-mist',
    hex: '99aeae',
  },
  '15-5207': {
    name: 'aquifer',
    hex: '89acac',
  },
  '12-5206': {
    name: 'blue-glass',
    hex: 'c6e3e1',
  },
  '13-5306': {
    name: 'icy-morn',
    hex: 'b0d3d1',
  },
  '14-4810': {
    name: 'canal-blue',
    hex: '9cc2c5',
  },
  '13-5309': {
    name: 'pastel-turquoise',
    hex: '99c5c4',
  },
  '15-5209': {
    name: 'aqua-haze',
    hex: '87b9bc',
  },
  '15-4715': {
    name: 'aqua-sea',
    hex: '6baaae',
  },
  '16-5121': {
    name: 'meadowbrook',
    hex: '60a0a3',
  },
  '12-5505': {
    name: 'glacier',
    hex: 'c3dbd4',
  },
  '12-5409': {
    name: 'fair-aqua',
    hex: 'b8e2dc',
  },
  '12-5209': {
    name: 'soothing-sea',
    hex: 'c3e9e4',
  },
  '12-5410': {
    name: 'bleached-aqua',
    hex: 'bce3df',
  },
  '13-4909': {
    name: 'blue-light',
    hex: 'acdfdd',
  },
  '13-4910': {
    name: 'blue-tint',
    hex: '9fd9d7',
  },
  '14-4811': {
    name: 'aqua-sky',
    hex: '7bc4c4',
  },
  '12-5204': {
    name: 'morning-mist',
    hex: 'cfdfdb',
  },
  '14-4908': {
    name: 'harbor-gray',
    hex: 'a8c0bb',
  },
  '14-4809': {
    name: 'eggshell-blue',
    hex: 'a3ccc9',
  },
  '16-5114': {
    name: 'dusty-turquoise',
    hex: '649b9e',
  },
  '16-4719': {
    name: 'porcelain',
    hex: '5d9ca4',
  },
  '18-5610': {
    name: 'brittany-blue',
    hex: '4c7e86',
  },
  '18-4718': {
    name: 'hydro',
    hex: '426972',
  },
  '15-4707': {
    name: 'blue-haze',
    hex: 'a5bcbb',
  },
  '15-5210': {
    name: 'nile-blue',
    hex: '76a7ab',
  },
  '16-4712': {
    name: 'mineral-blue',
    hex: '6d9192',
  },
  '17-4818': {
    name: 'bristol-blue',
    hex: '558f91',
  },
  '17-4919': {
    name: 'teal',
    hex: '478589',
  },
  '18-5308': {
    name: 'blue-spruce',
    hex: '486b67',
  },
  '18-5612': {
    name: 'sagebrush-green',
    hex: '567572',
  },
  '16-5806': {
    name: 'green-milieu',
    hex: '8a9992',
  },
  '16-5304': {
    name: 'jadeite',
    hex: '95a69f',
  },
  '16-5106': {
    name: 'blue-surf',
    hex: '90a8a4',
  },
  '17-5111': {
    name: 'oil-blue',
    hex: '658c88',
  },
  '17-5110': {
    name: 'trellis',
    hex: '6a8988',
  },
  '18-4612': {
    name: 'north-atlantic',
    hex: '536d70',
  },
  '18-5112': {
    name: 'sea-pine',
    hex: '4c6969',
  },
  '16-4408': {
    name: 'slate',
    hex: '8c9fa1',
  },
  '16-4706': {
    name: 'silver-blue',
    hex: '8a9a9a',
  },
  '16-4404': {
    name: 'abyss',
    hex: '8f9e9d',
  },
  '17-4408': {
    name: 'lead',
    hex: '7a898f',
  },
  '18-4711': {
    name: 'stormy-sea',
    hex: '6e8082',
  },
  '18-4510': {
    name: 'trooper',
    hex: '697a7e',
  },
  '18-4011': {
    name: 'goblin-blue',
    hex: '5f7278',
  },
  '16-5804': {
    name: 'slate-gray',
    hex: '8a9691',
  },
  '17-5107': {
    name: 'chinois-green',
    hex: '7c8c87',
  },
  '18-5611': {
    name: 'dark-forest',
    hex: '556962',
  },
  '18-5606': {
    name: 'balsam-green',
    hex: '576664',
  },
  '19-0312': {
    name: 'beetle',
    hex: '55584c',
  },
  '19-5004': {
    name: 'urban-chic',
    hex: '464e4d',
  },
  '19-5212': {
    name: 'darkest-spruce',
    hex: '303d3c',
  },
  '19-4318': {
    name: 'mallard-blue',
    hex: '3a5c6e',
  },
  '18-4530': {
    name: 'celestial',
    hex: '00,6380',
  },
  '18-4225': {
    name: 'saxony-blue',
    hex: '1f6680',
  },
  '19-4340': {
    name: 'lyons-blue',
    hex: '00,5871',
  },
  '19-4234': {
    name: 'ink-blue',
    hex: '0b5369',
  },
  '19-4329': {
    name: 'corsair',
    hex: '18576c',
  },
  '19-4324': {
    name: 'legion-blue',
    hex: '1f495b',
  },
  '18-4320': {
    name: 'aegean-blue',
    hex: '4e6e81',
  },
  '18-4222': {
    name: 'bluesteel',
    hex: '35637c',
  },
  '18-4023': {
    name: 'blue-ashes',
    hex: '3b5f78',
  },
  '19-4127': {
    name: 'midnight',
    hex: '325b74',
  },
  '18-4231': {
    name: 'blue-sapphire',
    hex: '09577b',
  },
  '19-4342': {
    name: 'seaport',
    hex: '005e7d',
  },
  '19-4241': {
    name: 'moroccan-blue',
    hex: '0f4e67',
  },
  '19-4535': {
    name: 'ocean-depths',
    hex: '00,6175',
  },
  '19-4526': {
    name: 'blue-coral',
    hex: '1b5366',
  },
  '19-4826': {
    name: 'dragonfly',
    hex: '2a5c6a',
  },
  '19-4916': {
    name: 'pacific',
    hex: '1f595c',
  },
  '19-4820': {
    name: 'balsam',
    hex: '33565e',
  },
  '19-4517': {
    name: 'mediterranea',
    hex: '32575d',
  },
  '19-4726': {
    name: 'atlantic-deep',
    hex: '274e,55',
  },
  '15-4717': {
    name: 'aqua',
    hex: '64a1ad',
  },
  '16-4610': {
    name: 'stillwater',
    hex: '70a4b0',
  },
  '16-4519': {
    name: 'delphinium-blue',
    hex: '6198ae',
  },
  '17-4421': {
    name: 'larkspur',
    hex: '3c7d90',
  },
  '17-4716': {
    name: 'storm-blue',
    hex: '47788a',
  },
  '18-4417': {
    name: 'tapestry',
    hex: '436573',
  },
  '18-4522': {
    name: 'colonial-blue',
    hex: '2d6471',
  },
  '16-4728': {
    name: 'peacock-blue',
    hex: '00a0b0',
  },
  '17-4735': {
    name: 'capri-breeze',
    hex: '00,8799',
  },
  '17-4728': {
    name: 'algiers-blue',
    hex: '00859c',
  },
  '17-4730': {
    name: 'caneel-bay',
    hex: '00849f',
  },
  '18-4525': {
    name: 'caribbean-sea',
    hex: '00819d',
  },
  '18-4528': {
    name: 'mosaic-blue',
    hex: '00758f',
  },
  '18-4432': {
    name: 'turkish-tile',
    hex: '00698b',
  },
  '14-4814': {
    name: 'angel-blue',
    hex: '83c5cd',
  },
  '14-4816': {
    name: 'blue-radiance',
    hex: '58c9d4',
  },
  '15-4722': {
    name: 'capri',
    hex: '44bbca',
  },
  '15-4825': {
    name: 'blue-curacao',
    hex: '32becc',
  },
  '16-4725': {
    name: 'scuba-blue',
    hex: '00abc0',
  },
  '16-4834': {
    name: 'bluebird',
    hex: '009dae',
  },
  '18-4733': {
    name: 'enamel-blue',
    hex: '007a8e',
  },
  '15-5218': {
    name: 'pool-blue',
    hex: '67bcb3',
  },
  '15-5217': {
    name: 'blue-turquoise',
    hex: '53b0ae',
  },
  '16-5123': {
    name: 'baltic',
    hex: '279d9f',
  },
  '17-4928': {
    name: 'lake-blue',
    hex: '008c96',
  },
  '18-4735': {
    name: 'tile-blue',
    hex: '00,8491',
  },
  '17-4724': {
    name: 'pagoda-blue',
    hex: '1a7f8e',
  },
  '18-4726': {
    name: 'biscay-bay',
    hex: '0,97988',
  },
  '13-5313': {
    name: 'aruba-blue',
    hex: '81d7d3',
  },
  '16-5127': {
    name: 'ceramic',
    hex: '00aaa9',
  },
  '17-5126': {
    name: 'viridian-green',
    hex: '00,9499',
  },
  '18-4930': {
    name: 'tropical-green',
    hex: '00,8786',
  },
  '17-5025': {
    name: 'navigate',
    hex: '00,8583',
  },
  '17-5029': {
    name: 'deep-peacock-blue',
    hex: '00,8381',
  },
  '17-5034': {
    name: 'lapis',
    hex: '00,8684',
  },
  '15-5519': {
    name: 'turquoise',
    hex: '45b5aa',
  },
  '15-5516': {
    name: 'waterfall',
    hex: '3ab0a2',
  },
  '16-5418': {
    name: 'lagoon',
    hex: '4d9e9a',
  },
  '16-5422': {
    name: 'bright-aqua',
    hex: '30a299',
  },
  '17-5421': {
    name: 'porcelain-green',
    hex: '108780',
  },
  '18-5128': {
    name: 'blue-grass',
    hex: '007c7a',
  },
  '18-4936': {
    name: 'fanfare',
    hex: '006d70',
  },
  '15-5425': {
    name: 'atlantis',
    hex: '00af9f',
  },
  '16-5425': {
    name: 'pool-green',
    hex: '00af9d',
  },
  '17-5330': {
    name: 'dynasty-green',
    hex: '008e,80',
  },
  '17-5335': {
    name: 'spectra-green',
    hex: '009b8c',
  },
  '17-5130': {
    name: 'columbia',
    hex: '00,9288',
  },
  '17-5024': {
    name: 'teal-blue',
    hex: '007f7c',
  },
  '18-5020': {
    name: 'parasailing',
    hex: '00736c',
  },
  '16-5109': {
    name: 'wasabi',
    hex: '73a89e',
  },
  '16-5515': {
    name: 'beryl-green',
    hex: '619187',
  },
  '17-5513': {
    name: 'deep-sea',
    hex: '4f7c74',
  },
  '17-5722': {
    name: 'bottle-green',
    hex: '427d6d',
  },
  '18-5725': {
    name: 'galapagos-green',
    hex: '29685f',
  },
  '18-5418': {
    name: 'antique-green',
    hex: '29675c',
  },
  '19-5217': {
    name: 'storm',
    hex: '0,,35453',
  },
  '16-5721': {
    name: 'marine-green',
    hex: '40a48e',
  },
  '16-5421': {
    name: 'sea-green',
    hex: '149c88',
  },
  '17-5528': {
    name: 'greenlake',
    hex: '007d69',
  },
  '18-5619': {
    name: 'tidepool',
    hex: '0a6f69',
  },
  '18-5620': {
    name: 'ivy',
    hex: '226c63',
  },
  '18-5424': {
    name: 'cadmium-green',
    hex: '00675b',
  },
  '18-5322': {
    name: 'alpine-green',
    hex: '005f56',
  },
  '16-5112': {
    name: 'canton',
    hex: '6da29e',
  },
  '16-5412': {
    name: 'agate-green',
    hex: '599f99',
  },
  '16-5119': {
    name: 'sea-blue',
    hex: '549f98',
  },
  '17-5122': {
    name: 'latigo-bay',
    hex: '379190',
  },
  '17-5117': {
    name: 'green-blue-slate',
    hex: '358082',
  },
  '18-5121': {
    name: 'bayou',
    hex: '20706f',
  },
  '18-5115': {
    name: 'north-sea',
    hex: '316c6b',
  },
  '18-5618': {
    name: 'deep-jungle',
    hex: '36716f',
  },
  '19-5226': {
    name: 'everglade',
    hex: '005b5d',
  },
  '19-4922': {
    name: 'teal-green',
    hex: '00,6361',
  },
  '18-4728': {
    name: 'harbor-blue',
    hex: '00656e',
  },
  '18-4834': {
    name: 'deep-lake',
    hex: '00656b',
  },
  '19-4524': {
    name: 'shaded-spruce',
    hex: '00585e',
  },
  '19-4914': {
    name: 'deep-teal',
    hex: '18454b',
  },
  '18-5410': {
    name: 'silver-pine',
    hex: '4e6866',
  },
  '19-4818': {
    name: 'mallard-green',
    hex: '405e5c',
  },
  '19-5408': {
    name: 'bistro-green',
    hex: '395551',
  },
  '19-5413': {
    name: 'jasper',
    hex: '335959',
  },
  '18-5315': {
    name: 'bayberry',
    hex: '255958',
  },
  '19-5414': {
    name: 'june-bug',
    hex: '264a48',
  },
  '19-5320': {
    name: 'ponderosa-pine',
    hex: '203b3d',
  },
  '12-5407': {
    name: 'aqua-glass',
    hex: 'd2e8e0',
  },
  '12-5406': {
    name: 'opal-blue',
    hex: 'c3ddd6',
  },
  '12-5506': {
    name: 'dusty-aqua',
    hex: 'c0dccd',
  },
  '14-5711': {
    name: 'ocean-wave',
    hex: '8ec5b6',
  },
  '14-5413': {
    name: 'holiday',
    hex: '81c3b4',
  },
  '14-5713': {
    name: 'cascade',
    hex: '76c1b2',
  },
  '15-5711': {
    name: 'dusty-jade-green',
    hex: '7bb5a3',
  },
  '12-5808': {
    name: 'honeydew',
    hex: 'bae1d3',
  },
  '13-6009': {
    name: 'brook-green',
    hex: 'afddcc',
  },
  '13-5714': {
    name: 'cabbage',
    hex: '87d7be',
  },
  '14-5714': {
    name: 'beveled-glass',
    hex: '7accb8',
  },
  '14-5718': {
    name: 'opal',
    hex: '77cfb7',
  },
  '15-5718': {
    name: 'biscay-green',
    hex: '55c6a9',
  },
  '15-5819': {
    name: 'spearmint',
    hex: '64bfa4',
  },
  '12-5408': {
    name: 'moonlight-jade',
    hex: 'c7e5df',
  },
  '12-5507': {
    name: 'bay',
    hex: 'bae5d6',
  },
  '13-5409': {
    name: 'yucca',
    hex: 'a1d7c9',
  },
  '13-5412': {
    name: 'beach-glass',
    hex: '96dfce',
  },
  '13-5414': {
    name: 'ice-green',
    hex: '87d8c3',
  },
  '14-5420': {
    name: 'cockatoo',
    hex: '58c8b6',
  },
  '15-5416': {
    name: 'florida-keys',
    hex: '56beab',
  },
  '14-5416': {
    name: 'bermuda',
    hex: '60c9b3',
  },
  '14-5721': {
    name: 'electric-green',
    hex: '4bc3a8',
  },
  '15-5421': {
    name: 'aqua-green',
    hex: '00b89f',
  },
  '16-5427': {
    name: 'billiard',
    hex: '00aa92',
  },
  '16-5533': {
    name: 'arcadia',
    hex: '00a28a',
  },
  '17-5430': {
    name: 'alhambra',
    hex: '00,8778',
  },
  '17-5633': {
    name: 'deep-green',
    hex: '00,9276',
  },
  '15-5728': {
    name: 'mint-leaf',
    hex: '00b694',
  },
  '16-5431': {
    name: 'peacock-green',
    hex: '00a78b',
  },
  '17-5638': {
    name: 'vivid-green',
    hex: '009e,82',
  },
  '17-5641': {
    name: 'emerald',
    hex: '00,9473',
  },
  '17-5734': {
    name: 'viridis',
    hex: '00846b',
  },
  '18-5624': {
    name: 'shady-glade',
    hex: '006e5b',
  },
  '18-5338': {
    name: 'ultramarine-green',
    hex: '006b54',
  },
  '14-5706': {
    name: 'silt-green',
    hex: 'a9bdb1',
  },
  '15-5706': {
    name: 'frosty-green',
    hex: 'a3b5a6',
  },
  '16-5808': {
    name: 'iceberg-green',
    hex: '8c9c92',
  },
  '16-5907': {
    name: 'granite-green',
    hex: '86a293',
  },
  '16-5810': {
    name: 'green-bay',
    hex: '7e9285',
  },
  '16-5807': {
    name: 'lily-pad',
    hex: '818f84',
  },
  '17-6009': {
    name: 'laurel-wreath',
    hex: '616f65',
  },
  '16-5820': {
    name: 'green-spruce',
    hex: '589f7e',
  },
  '18-6216': {
    name: 'comfrey',
    hex: '5b7961',
  },
  '17-5912': {
    name: 'dark-ivy',
    hex: '5b7763',
  },
  '18-6018': {
    name: 'foliage-green',
    hex: '3e6f58',
  },
  '18-6114': {
    name: 'myrtle',
    hex: '4f6b58',
  },
  '18-5616': {
    name: 'posy-green',
    hex: '325b51',
  },
  '19-5920': {
    name: 'pineneedle',
    hex: '334d41',
  },
  '17-6212': {
    name: 'sea-spray',
    hex: '717e6f',
  },
  '18-6011': {
    name: 'duck-green',
    hex: '53665c',
  },
  '18-5622': {
    name: 'frosty-spruce',
    hex: '578270',
  },
  '18-5621': {
    name: 'fir',
    hex: '3a725f',
  },
  '19-5420': {
    name: 'evergreen',
    hex: '11574a',
  },
  '19-5511': {
    name: 'hunter-green',
    hex: '335749',
  },
  '19-5513': {
    name: 'dark-green',
    hex: '314f40',
  },
  '16-5815': {
    name: 'feldspar',
    hex: '729b8b',
  },
  '18-5718': {
    name: 'smoke-pine',
    hex: '3e6257',
  },
  '19-5411': {
    name: 'trekking-green',
    hex: '355048',
  },
  '18-5913': {
    name: 'garden-topiary',
    hex: '3e524b',
  },
  '19-5914': {
    name: 'jungle-green',
    hex: '3c4e47',
  },
  '19-5917': {
    name: 'sycamore',
    hex: '35463d',
  },
  '19-4906': {
    name: 'green-gables',
    hex: '324241',
  },
  '17-0613': {
    name: 'vetiver',
    hex: '807d6f',
  },
  '18-0312': {
    name: 'deep-lichen-green',
    hex: '6e6e5c',
  },
  '19-0309': {
    name: 'thyme',
    hex: '50574c',
  },
  '19-0417': {
    name: 'kombu-green',
    hex: '3a4032',
  },
  '19-6110': {
    name: 'deep-forest',
    hex: '37413a',
  },
  '19-0414': {
    name: 'forest-night',
    hex: '434237',
  },
  '19-0509': {
    name: 'rosin',
    hex: '36362d',
  },
  '13-6108': {
    name: 'celadon',
    hex: 'b8ccba',
  },
  '13-5305': {
    name: 'pale-aqua',
    hex: 'c1ccc2',
  },
  '14-4505': {
    name: 'smoke',
    hex: 'bfc8c3',
  },
  '13-4305': {
    name: 'foggy-dew',
    hex: 'd1d5d0',
  },
  '14-4502': {
    name: 'mercury',
    hex: 'bac2ba',
  },
  '15-5704': {
    name: 'mineral-gray',
    hex: 'b2b6ac',
  },
  '15-5205': {
    name: 'aqua-gray',
    hex: 'a5b2aa',
  },
  '12-6206': {
    name: 'fairest-jade',
    hex: 'd8e3d7',
  },
  '11-0304': {
    name: 'water-lily',
    hex: 'dde3d5',
  },
  '12-0108': {
    name: 'canary-green',
    hex: 'd6dec9',
  },
  '13-6006': {
    name: 'almost-aqua',
    hex: 'cad3c1',
  },
  '13-6106': {
    name: 'green-tint',
    hex: 'c5ccc0',
  },
  '14-6007': {
    name: 'sea-foam',
    hex: 'b7c2b2',
  },
  '16-0110': {
    name: 'desert-sage',
    hex: 'a7ae9e',
  },
  '12-5404': {
    name: 'whisper-green',
    hex: 'e0e6d7',
  },
  '13-6105': {
    name: 'celadon-tint',
    hex: 'cbcebe',
  },
  '13-0107': {
    name: 'dewkist',
    hex: 'c4d1c2',
  },
  '13-6107': {
    name: 'green-lily',
    hex: 'c1cec1',
  },
  '14-6312': {
    name: 'cameo-green',
    hex: 'aac0ad',
  },
  '16-6008': {
    name: 'seagrass',
    hex: '959889',
  },
  '17-6206': {
    name: 'shadow',
    hex: '888d82',
  },
  '12-5504': {
    name: 'clearly-aqua',
    hex: 'cee1d4',
  },
  '13-6008': {
    name: 'misty-jade',
    hex: 'bcd9c8',
  },
  '14-6008': {
    name: 'subtle-green',
    hex: 'b5cbbb',
  },
  '14-5707': {
    name: 'aqua-foam',
    hex: 'adc3b4',
  },
  '13-5907': {
    name: 'gossamer-green',
    hex: 'b2cfbe',
  },
  '15-5812': {
    name: 'lichen',
    hex: '9bc2b1',
  },
  '14-6011': {
    name: 'grayed-jade',
    hex: '9bbea9',
  },
  '12-6205': {
    name: 'milky-green',
    hex: 'cfdbd1',
  },
  '12-6208': {
    name: 'phantom-green',
    hex: 'dce4d7',
  },
  '13-6110': {
    name: 'mist-green',
    hex: 'aacebc',
  },
  '13-5911': {
    name: 'birds-egg-green',
    hex: 'aaccb9',
  },
  '13-6208': {
    name: 'bok-choy',
    hex: 'bccab3',
  },
  '15-6315': {
    name: 'smoke-green',
    hex: 'a8bba2',
  },
  '16-5917': {
    name: 'malachite-green',
    hex: '709a89',
  },
  '16-0220': {
    name: 'mistletoe',
    hex: '8aa282',
  },
  '16-6216': {
    name: 'basil',
    hex: '879f84',
  },
  '16-6318': {
    name: 'mineral-green',
    hex: '7a9b78',
  },
  '16-0224': {
    name: 'green-eyes',
    hex: '7d956d',
  },
  '17-0119': {
    name: 'turf-green',
    hex: '6f8c69',
  },
  '17-0220': {
    name: 'watercress',
    hex: '748c69',
  },
  '18-0121': {
    name: 'elm-green',
    hex: '547053',
  },
  '17-6323': {
    name: 'hedge-green',
    hex: '768a75',
  },
  '17-0210': {
    name: 'loden-frost',
    hex: '788f74',
  },
  '16-6116': {
    name: 'shale-green',
    hex: '739072',
  },
  '17-6319': {
    name: 'kashmir',
    hex: '6f8d6a',
  },
  '17-0123': {
    name: 'stone-green',
    hex: '658e,67',
  },
  '18-0110': {
    name: 'english-ivy',
    hex: '61845b',
  },
  '17-6219': {
    name: 'deep-grass-green',
    hex: '558367',
  },
  '17-0235': {
    name: 'piquant-green',
    hex: '769358',
  },
  '17-0230': {
    name: 'forest-green',
    hex: '6b8d53',
  },
  '17-0133': {
    name: 'fluorite-green',
    hex: '699158',
  },
  '18-0130': {
    name: 'cactus',
    hex: '53713d',
  },
  '19-0230': {
    name: 'garden-green',
    hex: '495e,35',
  },
  '18-0125': {
    name: 'artichoke-green',
    hex: '4b6d41',
  },
  '18-0119': {
    name: 'willow-bough',
    hex: '59754d',
  },
  '17-0215': {
    name: 'aspen-green',
    hex: '7e9b76',
  },
  '17-6229': {
    name: 'medium-green',
    hex: '3c824e',
  },
  '18-6330': {
    name: 'juniper',
    hex: '3d7245',
  },
  '18-6320': {
    name: 'fairway',
    hex: '477050',
  },
  '18-0117': {
    name: 'vineyard-green',
    hex: '5f7355',
  },
  '18-0108': {
    name: 'dill',
    hex: '6f7755',
  },
  '19-6311': {
    name: 'greener-pastures',
    hex: '37503d',
  },
  '18-0420': {
    name: 'four-leaf-clover',
    hex: '616652',
  },
  '18-0317': {
    name: 'bronze-green',
    hex: '525f48',
  },
  '19-0323': {
    name: 'chive',
    hex: '4a5335',
  },
  '18-0322': {
    name: 'cypress',
    hex: '545a3e',
  },
  '19-0315': {
    name: 'black-forest',
    hex: '414f3c',
  },
  '19-0419': {
    name: 'rifle-green',
    hex: '414832',
  },
  '19-0415': {
    name: 'duffel-bag',
    hex: '394034',
  },
  '12-0109': {
    name: 'ambrosia',
    hex: 'd2e7ca',
  },
  '13-6007': {
    name: 'spray',
    hex: 'bed3bb',
  },
  '13-0116': {
    name: 'pastel-green',
    hex: 'b4d3b2',
  },
  '15-6114': {
    name: 'hemlock',
    hex: '97c1a1',
  },
  '14-6316': {
    name: 'sprucestone',
    hex: '9fc09c',
  },
  '14-6319': {
    name: 'meadow',
    hex: '8bba94',
  },
  '16-6324': {
    name: 'jadesheen',
    hex: '77a276',
  },
  '13-0117': {
    name: 'green-ash',
    hex: 'a0daa9',
  },
  '14-0127': {
    name: 'greengage',
    hex: '8bc28c',
  },
  '15-6120': {
    name: 'ming',
    hex: '7cb08a',
  },
  '14-6327': {
    name: 'zephyr-green',
    hex: '7cb083',
  },
  '14-6324': {
    name: 'peapod',
    hex: '82b185',
  },
  '15-6322': {
    name: 'light-grass-green',
    hex: '7cb68e',
  },
  '14-6329': {
    name: 'absinthe-green',
    hex: '76b583',
  },
  '14-6017': {
    name: 'neptune-green',
    hex: '7fbb9e',
  },
  '16-5919': {
    name: 'creme-de-menthe',
    hex: '70a38d',
  },
  '16-5924': {
    name: 'winter-green',
    hex: '4f9e81',
  },
  '16-5825': {
    name: 'gumdrop-green',
    hex: '2ea785',
  },
  '16-5932': {
    name: 'holly-green',
    hex: '0f9d76',
  },
  '17-5735': {
    name: 'parakeet',
    hex: '008c69',
  },
  '18-5642': {
    name: 'golf-green',
    hex: '00,8763',
  },
  '14-6330': {
    name: 'spring-bud',
    hex: '6bcd9c',
  },
  '16-6030': {
    name: 'katydid',
    hex: '66bc91',
  },
  '15-6123': {
    name: 'jade-cream',
    hex: '60b892',
  },
  '16-5930': {
    name: 'ming-green',
    hex: '3aa278',
  },
  '16-6127': {
    name: 'greenbriar',
    hex: '4b9b69',
  },
  '18-6022': {
    name: 'leprechaun',
    hex: '378661',
  },
  '17-5923': {
    name: 'pine-green',
    hex: '3a795e',
  },
  '16-5942': {
    name: 'blarney',
    hex: '00a776',
  },
  '16-5938': {
    name: 'mint',
    hex: '00a170',
  },
  '17-5937': {
    name: 'deep-mint',
    hex: '009e6d',
  },
  '17-5936': {
    name: 'simply-green',
    hex: '009b75',
  },
  '18-5841': {
    name: 'pepper-green',
    hex: '007d60',
  },
  '18-5633': {
    name: 'bosphorus',
    hex: '00,7558',
  },
  '19-6026': {
    name: 'verdant-green',
    hex: '12674a',
  },
  '13-0111': {
    name: 'seacrest',
    hex: 'bfd1b3',
  },
  '12-0317': {
    name: 'gleam',
    hex: 'bfd1ad',
  },
  '14-0121': {
    name: 'nile-green',
    hex: 'a7c796',
  },
  '15-6317': {
    name: 'quiet-green',
    hex: '9ebc97',
  },
  '15-6316': {
    name: 'fair-green',
    hex: '92af88',
  },
  '15-6423': {
    name: 'forest-shade',
    hex: '91ac80',
  },
  '16-0228': {
    name: 'jade-green',
    hex: '759465',
  },
  '12-0225': {
    name: 'patina-green',
    hex: 'b9eab3',
  },
  '13-0221': {
    name: 'pistachio-green',
    hex: 'a9d39e',
  },
  '14-0123': {
    name: 'arcadian-green',
    hex: 'a3c893',
  },
  '15-6437': {
    name: 'grass-green',
    hex: '7bb369',
  },
  '15-6442': {
    name: 'bud-green',
    hex: '79b465',
  },
  '15-6428': {
    name: 'green-tea',
    hex: '86a96f',
  },
  '16-0123': {
    name: 'tendril',
    hex: '89a06b',
  },
  '13-0220': {
    name: 'paradise-green',
    hex: 'b2e79f',
  },
  '14-0452': {
    name: 'lime-green',
    hex: '9fc131',
  },
  '15-0545': {
    name: 'jasmine-green',
    hex: '7ec845',
  },
  '15-0146': {
    name: 'green-flash',
    hex: '79c753',
  },
  '16-6340': {
    name: 'classic-green',
    hex: '39a845',
  },
  '17-0145': {
    name: 'online-lime',
    hex: '44883c',
  },
  '18-0135': {
    name: 'treetop',
    hex: '476a30',
  },
  '14-0156': {
    name: 'summer-green',
    hex: '7ed37f',
  },
  '14-6340': {
    name: 'spring-bouquet',
    hex: '6dce87',
  },
  '16-6240': {
    name: 'island-green',
    hex: '2bae66',
  },
  '15-6340': {
    name: 'irish-green',
    hex: '45be76',
  },
  '15-6432': {
    name: 'shamrock',
    hex: '6fa26b',
  },
  '16-6329': {
    name: 'peppermint',
    hex: '699e6d',
  },
  '17-6333': {
    name: 'mint-green',
    hex: '487d49',
  },
  '16-6444': {
    name: 'poison-green',
    hex: '4db560',
  },
  '16-6339': {
    name: 'vibrant-green',
    hex: '55a860',
  },
  '16-6138': {
    name: 'kelly-green',
    hex: '339c5e',
  },
  '15-5534': {
    name: 'bright-green',
    hex: '009b5c',
  },
  '17-6153': {
    name: 'fern-green',
    hex: '008c45',
  },
  '17-6030': {
    name: 'jelly-bean',
    hex: '00,8658',
  },
  '18-6024': {
    name: 'amazon',
    hex: '1f7349',
  },
  '13-0442': {
    name: 'green-glow',
    hex: 'b0c965',
  },
  '14-0244': {
    name: 'bright-lime-green',
    hex: '97bc62',
  },
  '15-0343': {
    name: 'greenery',
    hex: '88b04b',
  },
  '16-0237': {
    name: 'foliage',
    hex: '75a14f',
  },
  '17-0336': {
    name: 'peridot',
    hex: '819548',
  },
  '16-0233': {
    name: 'meadow-green',
    hex: '739957',
  },
  '18-0538': {
    name: 'woodbine',
    hex: '7b7f32',
  },
  '14-0232': {
    name: 'jade-lime',
    hex: 'a1ca7b',
  },
  '15-0336': {
    name: 'herbal-garden',
    hex: '9cad60',
  },
  '15-0332': {
    name: 'leaf-green',
    hex: '9faf6c',
  },
  '15-0341': {
    name: 'parrot-green',
    hex: '8db051',
  },
  '16-0435': {
    name: 'dark-citron',
    hex: 'a0ac4f',
  },
  '16-0230': {
    name: 'macaw-green',
    hex: '9bb53e',
  },
  '16-0235': {
    name: 'kiwi',
    hex: '7aab55',
  },
  '13-0535': {
    name: 'sharp-green',
    hex: 'c6ec7a',
  },
  '12-0435': {
    name: 'daiquiri-green',
    hex: 'c9d77e',
  },
  '13-0540': {
    name: 'wild-lime',
    hex: 'c3d363',
  },
  '15-0533': {
    name: 'linden-green',
    hex: 'c4bf71',
  },
  '14-0445': {
    name: 'bright-chartreuse',
    hex: 'b5bf50',
  },
  '14-0446': {
    name: 'tender-shoots',
    hex: 'b5cc39',
  },
  '13-0550': {
    name: 'lime-punch',
    hex: 'c0d725',
  },
  '12-0741': {
    name: 'sunny-lime',
    hex: 'dfef87',
  },
  '13-0645': {
    name: 'limeade',
    hex: 'd3d95f',
  },
  '13-0650': {
    name: 'sulphur-spring',
    hex: 'd5d717',
  },
  '15-0548': {
    name: 'citronelle',
    hex: 'b8af23',
  },
  '15-0543': {
    name: 'apple-green',
    hex: 'b5b644',
  },
  '15-0646': {
    name: 'warm-olive',
    hex: 'c7b63c',
  },
  '16-0840': {
    name: 'antique-moss',
    hex: 'b9a023',
  },
  '12-0312': {
    name: 'lime-cream',
    hex: 'd7e8bc',
  },
  '13-0319': {
    name: 'shadow-lime',
    hex: 'cfe09d',
  },
  '13-0530': {
    name: 'lime-sherbet',
    hex: 'cdd78a',
  },
  '13-0324': {
    name: 'lettuce-green',
    hex: 'bed38e',
  },
  '13-0331': {
    name: 'sap-green',
    hex: 'afcb80',
  },
  '14-0226': {
    name: 'opaline-green',
    hex: 'a3c57d',
  },
  '15-0523': {
    name: 'winter-pear',
    hex: 'b0b487',
  },
  '11-0410': {
    name: 'sylvan-green',
    hex: 'e7eacb',
  },
  '11-0205': {
    name: 'glass-green',
    hex: 'ecead0',
  },
  '12-0607': {
    name: 'green-essence',
    hex: 'e9eac8',
  },
  '11-0609': {
    name: 'ethereal-green',
    hex: 'f1ecca',
  },
  '13-0614': {
    name: 'garden-glade',
    hex: 'dcd8a8',
  },
  '12-0418': {
    name: 'hay',
    hex: 'd3cca3',
  },
  '13-0522': {
    name: 'pale-green',
    hex: 'cbce91',
  },
  '12-0521': {
    name: 'young-wheat',
    hex: 'e1e3a9',
  },
  '12-0524': {
    name: 'citron',
    hex: 'dfde9b',
  },
  '12-0525': {
    name: 'luminary-green',
    hex: 'e3eaa5',
  },
  '12-0520': {
    name: 'pale-lime-yellow',
    hex: 'dfe69f',
  },
  '13-0633': {
    name: 'chardonnay',
    hex: 'e7df99',
  },
  '13-0333': {
    name: 'lima-bean',
    hex: 'e1d590',
  },
  '12-0530': {
    name: 'charlock',
    hex: 'e5e790',
  },
  '12-0426': {
    name: 'mellow-green',
    hex: 'd5d593',
  },
  '14-0627': {
    name: 'shadow-green',
    hex: 'cfc486',
  },
  '13-0532': {
    name: 'celery-green',
    hex: 'c5cc7b',
  },
  '14-0434': {
    name: 'green-banana',
    hex: 'babc72',
  },
  '15-0538': {
    name: 'green-oasis',
    hex: 'b0b454',
  },
  '15-0628': {
    name: 'leek-green',
    hex: 'b7b17a',
  },
  '15-0525': {
    name: 'weeping-willow',
    hex: 'b3b17b',
  },
  '15-0535': {
    name: 'palm',
    hex: 'afaf5e',
  },
  '16-0639': {
    name: 'golden-olive',
    hex: 'af9841',
  },
  '16-0540': {
    name: 'oasis',
    hex: 'a3a04e',
  },
  '16-0532': {
    name: 'moss',
    hex: 'a09d59',
  },
  '17-0840': {
    name: 'amber-green',
    hex: '9a803a',
  },
  '17-0836': {
    name: 'ecru-olive',
    hex: '927b3c',
  },
  '17-0636': {
    name: 'green-moss',
    hex: '857946',
  },
  '16-0726': {
    name: 'khaki',
    hex: 'a39264',
  },
  '17-0929': {
    name: 'fennel-seed',
    hex: '998456',
  },
  '16-0632': {
    name: 'willow',
    hex: '9a8b4f',
  },
  '17-0843': {
    name: 'bronze-mist',
    hex: '9c7e41',
  },
  '18-0835': {
    name: 'dried-tobacco',
    hex: '997b38',
  },
  '18-0840': {
    name: 'tapenade',
    hex: '805d24',
  },
  '18-0832': {
    name: 'plantation',
    hex: '7a6332',
  },
  '13-0210': {
    name: 'fog-green',
    hex: 'c2cbb4',
  },
  '13-0212': {
    name: 'tender-greens',
    hex: 'c5cfb6',
  },
  '13-0608': {
    name: 'aloe-wash',
    hex: 'd0d3b7',
  },
  '14-0114': {
    name: 'celadon-green',
    hex: 'b5c1a5',
  },
  '15-6313': {
    name: 'laurel-green',
    hex: 'adbba1',
  },
  '15-6310': {
    name: 'swamp',
    hex: 'a8b197',
  },
  '15-6414': {
    name: 'reseda',
    hex: 'a1ad92',
  },
  '12-0106': {
    name: 'meadow-mist',
    hex: 'd3dec4',
  },
  '12-0322': {
    name: 'butterfly',
    hex: 'cadea5',
  },
  '12-0315': {
    name: 'white-jade',
    hex: 'd4dbb2',
  },
  '12-0313': {
    name: 'seafoam-green',
    hex: 'cbd5b1',
  },
  '13-0215': {
    name: 'reed',
    hex: 'c3d3a8',
  },
  '14-0217': {
    name: 'seedling',
    hex: 'c0cba1',
  },
  '14-0115': {
    name: 'foam-green',
    hex: 'b4c79c',
  },
  '13-0317': {
    name: 'lily-green',
    hex: 'c5cf98',
  },
  '14-0425': {
    name: 'beechnut',
    hex: 'c2c18d',
  },
  '14-0223': {
    name: 'nile',
    hex: 'b4bb85',
  },
  '15-0531': {
    name: 'sweet-pea',
    hex: 'a3a969',
  },
  '16-0439': {
    name: 'spinach-green',
    hex: '909b4c',
  },
  '16-0430': {
    name: 'fern',
    hex: '9aa067',
  },
  '17-0535': {
    name: 'green-olive',
    hex: '8d8b55',
  },
  '17-0324': {
    name: 'epsom',
    hex: '849161',
  },
  '18-0332': {
    name: 'grasshopper',
    hex: '77824a',
  },
  '17-0330': {
    name: 'turtle-green',
    hex: '81894e',
  },
  '18-0324': {
    name: 'calliste-green',
    hex: '757a4e',
  },
  '18-0435': {
    name: 'calla-green',
    hex: '6a6f34',
  },
  '18-0328': {
    name: 'cedar-green',
    hex: '5e6737',
  },
  '18-0228': {
    name: 'pesto',
    hex: '595f34',
  },
  '15-0326': {
    name: 'tarragon',
    hex: 'a4ae77',
  },
  '16-0421': {
    name: 'sage',
    hex: '91946e',
  },
  '18-0525': {
    name: 'iguana',
    hex: '818455',
  },
  '17-0115': {
    name: 'oil-green',
    hex: '80856d',
  },
  '18-0422': {
    name: 'loden-green',
    hex: '6e7153',
  },
  '18-0426': {
    name: 'capulet-olive',
    hex: '656344',
  },
  '18-0316': {
    name: 'olivine',
    hex: '666b54',
  },
  '14-0216': {
    name: 'lint',
    hex: 'b6ba99',
  },
  '15-0522': {
    name: 'pale-olive-green',
    hex: 'b5ad88',
  },
  '15-0318': {
    name: 'sage-green',
    hex: 'b2ac88',
  },
  '16-0518': {
    name: 'gray-green',
    hex: 'a49a79',
  },
  '16-1118': {
    name: 'sponge',
    hex: 'a49775',
  },
  '17-0618': {
    name: 'mermaid',
    hex: '817a65',
  },
  '17-0517': {
    name: 'dusky-green',
    hex: '746c57',
  },
  '16-0213': {
    name: 'tea',
    hex: '999b85',
  },
  '17-0510': {
    name: 'silver-sage',
    hex: '938b78',
  },
  '16-0713': {
    name: 'slate-green',
    hex: 'a0987c',
  },
  '16-0613': {
    name: 'elm',
    hex: 'a39f86',
  },
  '17-0525': {
    name: 'mosstone',
    hex: '858961',
  },
  '17-0620': {
    name: 'aloe',
    hex: '817a60',
  },
  '18-0622': {
    name: 'olive-drab',
    hex: '756d47',
  },
  '16-0526': {
    name: 'cedar',
    hex: '928e,64',
  },
  '17-0625': {
    name: 'boa',
    hex: '8e855f',
  },
  '17-0627': {
    name: 'dried-herb',
    hex: '847a59',
  },
  '18-0527': {
    name: 'olive-branch',
    hex: '646a45',
  },
  '18-0629': {
    name: 'lizard',
    hex: '71643e',
  },
  '18-0430': {
    name: 'avocado',
    hex: '676232',
  },
  '18-0627': {
    name: 'fir-green',
    hex: '67592a',
  },
  '14-0418': {
    name: 'bog',
    hex: 'bab696',
  },
  '17-1019': {
    name: 'elmwood',
    hex: '8c7c61',
  },
  '18-0724': {
    name: 'gothic-olive',
    hex: '7c6e4f',
  },
  '18-0830': {
    name: 'butternut',
    hex: '7a643f',
  },
  '18-0825': {
    name: 'nutria',
    hex: '75663e',
  },
  '19-0622': {
    name: 'military-olive',
    hex: '63563b',
  },
  '19-0516': {
    name: 'dark-olive',
    hex: '574d35',
  },
  '15-6410': {
    name: 'moss-gray',
    hex: 'afab97',
  },
  '14-6408': {
    name: 'abbey-stone',
    hex: 'aba798',
  },
  '18-0521': {
    name: 'burnt-olive',
    hex: '646049',
  },
  '18-0515': {
    name: 'dusty-olive',
    hex: '646356',
  },
  '19-0512': {
    name: 'ivy-green',
    hex: '585442',
  },
  '19-0515': {
    name: 'olive-night',
    hex: '535040',
  },
  '19-0511': {
    name: 'grape-leaf',
    hex: '545144',
  },
  '15-3800': {
    name: 'porpoise',
    hex: 'a7a19e',
  },
  '16-3800': {
    name: 'satellite',
    hex: '9f8d89',
  },
  '18-1210': {
    name: 'driftwood',
    hex: '847a75',
  },
  '18-1304': {
    name: 'falcon',
    hex: '6d625b',
  },
  '19-0808': {
    name: 'morel',
    hex: '685c53',
  },
  '18-1108': {
    name: 'fallen-rock',
    hex: '807669',
  },
  '16-0205': {
    name: 'vintage-khaki',
    hex: '9a9186',
  },
  '16-1104': {
    name: 'crockery',
    hex: 'a49887',
  },
  '16-1109': {
    name: 'greige',
    hex: '928475',
  },
  '17-1311': {
    name: 'desert-taupe',
    hex: '8d7e71',
  },
  '15-1307': {
    name: 'white-pepper',
    hex: 'b6a893',
  },
  '15-1304': {
    name: 'humus',
    hex: 'b7a793',
  },
  '17-1316': {
    name: 'portabella',
    hex: '937b6a',
  },
  '18-1017': {
    name: 'caribou',
    hex: '816d5e',
  },
  '15-1114': {
    name: 'travertine',
    hex: 'ae997d',
  },
  '16-1120': {
    name: 'starfish',
    hex: 'b09a77',
  },
  '15-1218': {
    name: 'semolina',
    hex: 'ceb899',
  },
  '16-0920': {
    name: 'curds-and-whey',
    hex: 'bca483',
  },
  '17-1038': {
    name: 'tigers-eye',
    hex: '977c61',
  },
  '18-1029': {
    name: 'toasted-coconut',
    hex: '8b6a4f',
  },
  '19-0916': {
    name: 'rain-drum',
    hex: '5f4c40',
  },
  '11-0615': {
    name: 'pear-sorbet',
    hex: 'f3eac3',
  },
  '12-0718': {
    name: 'pineapple-slice',
    hex: 'e7d391',
  },
  '12-0758': {
    name: 'yarrow',
    hex: 'face6d',
  },
  '12-0717': {
    name: 'anise-flower',
    hex: 'f4e3b5',
  },
  '11-0619': {
    name: 'flan',
    hex: 'f6e3b4',
  },
  '12-0729': {
    name: 'sundress',
    hex: 'ebcf89',
  },
  '12-0709': {
    name: 'macadamia',
    hex: 'e4cfb6',
  },
  '12-0711': {
    name: 'lemon-meringue',
    hex: 'f6e199',
  },
  '11-0622': {
    name: 'yellow-iris',
    hex: 'eee78e',
  },
  '12-0737': {
    name: 'goldfinch',
    hex: 'f8dc6c',
  },
  '13-0756': {
    name: 'lemon-zest',
    hex: 'f9d857',
  },
  '13-0759': {
    name: 'solar-power',
    hex: 'f4bf3a',
  },
  '14-0851': {
    name: 'samoan-sun',
    hex: 'fbc85f',
  },
  '16-1149': {
    name: 'desert-sun',
    hex: 'c87629',
  },
  '18-1163': {
    name: 'pumpkin-spice',
    hex: 'a05c17',
  },
  '16-1164': {
    name: 'orange-pepper',
    hex: 'df7500',
  },
  '17-1140': {
    name: 'marmalade',
    hex: 'c16512',
  },
  '18-1249': {
    name: 'hawaiian-sunset',
    hex: 'bb5c14',
  },
  '17-1342': {
    name: 'autumnal',
    hex: 'a15325',
  },
  '18-1246': {
    name: 'umber',
    hex: '944a1f',
  },
  '17-1349': {
    name: 'exuberance',
    hex: 'e86800',
  },
  '16-1363': {
    name: 'puffins-bill',
    hex: 'e95c20',
  },
  '18-1148': {
    name: 'caramel-cafe',
    hex: '864c24',
  },
  '16-1449': {
    name: 'gold-flame',
    hex: 'b45422',
  },
  '18-1345': {
    name: 'cinnamon-stick',
    hex: '9b4722',
  },
  '18-1340': {
    name: 'potters-clay',
    hex: '9e4624',
  },
  '18-1355': {
    name: 'rooibos-tea',
    hex: 'a23c26',
  },
  '17-1360': {
    name: 'celosia-orange',
    hex: 'e8703a',
  },
  '17-1461': {
    name: 'orangeade',
    hex: 'e2552c',
  },
  '17-1449': {
    name: 'pureed-pumpkin',
    hex: 'c34121',
  },
  '17-1463': {
    name: 'tangerine-tango',
    hex: 'dd4124',
  },
  '18-1564': {
    name: 'poinciana',
    hex: 'ca3422',
  },
  '17-1452': {
    name: 'koi',
    hex: 'd15837',
  },
  '19-1662': {
    name: 'samba',
    hex: 'a2242f',
  },
  '19-1757': {
    name: 'barbados-cherry',
    hex: 'aa0a27',
  },
  '19-1758': {
    name: 'haute-red',
    hex: 'a11729',
  },
  '18-1657': {
    name: 'salsa',
    hex: 'aa182b',
  },
  '19-1559': {
    name: 'scarlet-sage',
    hex: '9d202f',
  },
  '19-1863': {
    name: 'scooter',
    hex: '941e,32',
  },
  '19-1555': {
    name: 'red-dahlia',
    hex: '7d2027',
  },
  '19-1531': {
    name: 'sun-dried-tomato',
    hex: '752329',
  },
  '19-1337': {
    name: 'fired-brick',
    hex: '6a2e2a',
  },
  '19-1652': {
    name: 'rhubarb',
    hex: '77202f',
  },
  '19-1535': {
    name: 'syrah',
    hex: '6a282c',
  },
  '19-1930': {
    name: 'pomegranate',
    hex: '6c2831',
  },
  '19-1724': {
    name: 'cabernet',
    hex: '64242e',
  },
  '13-2807': {
    name: 'ballerina',
    hex: 'f2cfdc',
  },
  '13-2802': {
    name: 'fairy-tale',
    hex: 'f2c1d1',
  },
  '15-1506': {
    name: 'etherea',
    hex: 'a5958f',
  },
  '16-1710': {
    name: 'foxglove',
    hex: 'b98391',
  },
  '17-1609': {
    name: 'mesa-rose',
    hex: 'a66e7a',
  },
  '18-1950': {
    name: 'jazzy',
    hex: 'b61c50',
  },
  '19-2039': {
    name: 'granita',
    hex: 'a52350',
  },
  '19-2041': {
    name: 'cherries-jubilee',
    hex: 'a22452',
  },
  '18-2140': {
    name: 'cabaret',
    hex: 'cb3373',
  },
  '19-2045': {
    name: 'vivacious',
    hex: 'a32857',
  },
  '18-3628': {
    name: 'bellflower',
    hex: '9469a2',
  },
  '17-3617': {
    name: 'english-lavendar',
    hex: '9d7bb0',
  },
  '16-3817': {
    name: 'rhapsody',
    hex: '9f86aa',
  },
  '19-3628': {
    name: 'acai',
    hex: '46295a',
  },
  '19-3638': {
    name: 'tillandsia-purple',
    hex: '563474',
  },
  '18-3635': {
    name: 'picasso-lily',
    hex: '634878',
  },
  '18-3620': {
    name: 'mystical',
    hex: '5f4e72',
  },
  '15-3908': {
    name: 'icelandic-blue',
    hex: 'a9adc2',
  },
  '15-3912': {
    name: 'aleutian',
    hex: '9a9eb3',
  },
  '17-3933': {
    name: 'silver-bullet',
    hex: '81839a',
  },
  '18-3933': {
    name: 'blue-granite',
    hex: '717388',
  },
  '19-3815': {
    name: 'evening-blue',
    hex: '2a293e',
  },
  '19-3713': {
    name: 'deep-well',
    hex: '2c2a33',
  },
  '19-3924': {
    name: 'night-sky',
    hex: '2a2a35',
  },
  '16-3921': {
    name: 'blue-heron',
    hex: '96a3c7',
  },
  '16-4030': {
    name: 'hydrangea',
    hex: '849bcc',
  },
  '14-3949': {
    name: 'xenon-blue',
    hex: 'b7c0d7',
  },
  '16-3922': {
    name: 'brunnera-blue',
    hex: '9ba9ca',
  },
  '19-3922': {
    name: 'sky-captain',
    hex: '262934',
  },
  '19-3923': {
    name: 'navy-blazer',
    hex: '282d3c',
  },
  '19-4020': {
    name: 'dark-sapphire',
    hex: '262b37',
  },
  '13-4111': {
    name: 'plein-air',
    hex: 'bfcad6',
  },
  '13-3920': {
    name: 'halogen-blue',
    hex: 'bdc6dc',
  },
  '15-4030': {
    name: 'chambray-blue',
    hex: '9eb4d3',
  },
  '15-3932': {
    name: 'bel-air-blue',
    hex: '819ac1',
  },
  '19-3929': {
    name: 'vintage-indigo',
    hex: '4a556b',
  },
  '19-3953': {
    name: 'sodalite-blue',
    hex: '253668',
  },
  '19-4022': {
    name: 'parisian-night',
    hex: '323441',
  },
  '19-3964': {
    name: 'monaco-blue',
    hex: '274374',
  },
  '18-4034': {
    name: 'vallarta-blue',
    hex: '30658e',
  },
  '19-4011': {
    name: 'salute',
    hex: '282b34',
  },
  '19-4009': {
    name: 'outer-space',
    hex: '2f3441',
  },
  '19-4021': {
    name: 'blueberry',
    hex: '2c333e',
  },
  '19-4012': {
    name: 'carbon',
    hex: '272f38',
  },
  '19-4218': {
    name: 'vulcan',
    hex: '2d3036',
  },
  '13-4200': {
    name: 'omphalodes',
    hex: 'b5cedf',
  },
  '14-4317': {
    name: 'cool-blue',
    hex: 'a5c5d9',
  },
  '18-4028': {
    name: 'bering-sea',
    hex: '4b5b6e',
  },
  '19-4121': {
    name: 'blue-wing-teal',
    hex: '2c4053',
  },
  '19-4033': {
    name: 'poseidon',
    hex: '123955',
  },
  '18-4434': {
    name: 'mykonos-blue',
    hex: '00,5780',
  },
  '19-4326': {
    name: 'reflecting-pond',
    hex: '203e4a',
  },
  '14-4311': {
    name: 'corydalis-blue',
    hex: 'a9cada',
  },
  '14-4310': {
    name: 'blue-topaz',
    hex: '78bdd4',
  },
  '14-4511': {
    name: 'gulf-stream',
    hex: '88c3d0',
  },
  '15-4714': {
    name: 'aquarelle',
    hex: '61aab1',
  },
  '14-4812': {
    name: 'aqua-splash',
    hex: '85ced1',
  },
  '19-5220': {
    name: 'botanical-garden',
    hex: '12403c',
  },
  '19-5350': {
    name: 'scarab',
    hex: '23312d',
  },
  '13-4108': {
    name: 'nimbus-cloud',
    hex: 'd5d5d8',
  },
  '14-4105': {
    name: 'micro-chip',
    hex: 'babcc0',
  },
  '16-5101': {
    name: 'wet-weather',
    hex: '929090',
  },
  '17-4014': {
    name: 'titanium',
    hex: '807d7f',
  },
  '18-4016': {
    name: 'december-sky',
    hex: '767275',
  },
  '19-3900': {
    name: 'pavement',
    hex: '524d50',
  },
  '19-3901': {
    name: 'magnet',
    hex: '4d4b4f',
  },
  '16-3850': {
    name: 'silver-sconce',
    hex: 'a19fa5',
  },
  '17-3911': {
    name: 'silver-filigree',
    hex: '7f7c81',
  },
  '17-3907': {
    name: 'quicksilver',
    hex: '7e7d88',
  },
  '17-1503': {
    name: 'storm-front',
    hex: '787376',
  },
  '18-3907': {
    name: 'tornado',
    hex: '5e5b60',
  },
  '18-5210': {
    name: 'eiffel-tower',
    hex: '5c5658',
  },
  '19-3927': {
    name: 'graphite',
    hex: '3b3b48',
  },
  '16-3915': {
    name: 'alloy',
    hex: '98979a',
  },
  '16-3916': {
    name: 'sleet',
    hex: '92949b',
  },
  '15-4307': {
    name: 'tradewinds',
    hex: '7f8793',
  },
  '18-3912': {
    name: 'grisaille',
    hex: '585e6f',
  },
  '19-3918': {
    name: 'periscope',
    hex: '46444c',
  },
  '18-4006': {
    name: 'quiet-shade',
    hex: '66676d',
  },
  '19-4215': {
    name: 'turbulence',
    hex: '4e545b',
  },
  '18-4214': {
    name: 'stormy-weather',
    hex: '58646d',
  },
  '19-3910': {
    name: 'iron-gate',
    hex: '4e5055',
  },
  '19-3907': {
    name: 'forged-iron',
    hex: '48464a',
  },
  '19-0201': {
    name: 'asphalt',
    hex: '434447',
  },
  '16-4703': {
    name: 'ghost-gray',
    hex: '9c9b98',
  },
  '18-5102': {
    name: 'brushed-nickel',
    hex: '73706f',
  },
  '16-4400': {
    name: 'mourning-dove',
    hex: '94908b',
  },
  '15-4306': {
    name: 'belgian-block',
    hex: 'a3a9a6',
  },
  '18-5806': {
    name: 'agave-green',
    hex: '6b7169',
  },
  '19-5621': {
    name: 'cilantro',
    hex: '43544b',
  },
  '19-5406': {
    name: 'pine-grove',
    hex: '213631',
  },
  '19-6050': {
    name: 'eden',
    hex: '264e,36',
  },
  '18-6030': {
    name: 'jolly-green',
    hex: '00,7844',
  },
  '19-5918': {
    name: 'mountain-view',
    hex: '2e3d30',
  },
  '14-0116': {
    name: 'margarita',
    hex: 'b5c38e',
  },
  '18-0523': {
    name: 'winter-moss',
    hex: '5b5a41',
  },
  '19-0307': {
    name: 'climbing-ivy',
    hex: '444940',
  },
  '19-0840': {
    name: 'delicioso',
    hex: '3f352f',
  },
  '19-0910': {
    name: 'mulch',
    hex: '433937',
  },
  '19-1106': {
    name: 'mole',
    hex: '392d2b',
  },
  '19-1109': {
    name: 'chocolate-torte',
    hex: '382e2d',
  },
  '19-1018': {
    name: 'ganache',
    hex: '34292a',
  },
  '19-3909': {
    name: 'black-bean',
    hex: '2e272a',
  },
  '19-1103': {
    name: 'espresso',
    hex: '363031',
  },
  '19-4008': {
    name: 'meteorite',
    hex: '2b2929',
  },
  '19-4004': {
    name: 'tap-shoe',
    hex: '2a2b2d',
  },
  '11-1001': {
    name: 'white-alyssum',
    hex: 'efebe7',
  },
  '11-0605': {
    name: 'jet-stream',
    hex: 'ede6de',
  },
  '11-0106': {
    name: 'sweet-cream',
    hex: 'f0ead6',
  },
  '11-0110': {
    name: 'buttercream',
    hex: 'efe0cd',
  },
  '11-0515': {
    name: 'lemon-icing',
    hex: 'f6ebc8',
  },
  '11-0607': {
    name: 'sugar-swizzle',
    hex: 'f3eee7',
  },
  '11-0608': {
    name: 'coconut-milk',
    hex: 'f0ede5',
  },
  '11-0623': {
    name: 'yellow-pear',
    hex: 'ece99b',
  },
  '11-1302': {
    name: 'sea-salt',
    hex: 'f1e6de',
  },
  '11-4001': {
    name: 'brilliant-white',
    hex: 'edf1fe',
  },
  '11-4302': {
    name: 'cannoli-cream',
    hex: 'f0efe2',
  },
  '11-4801': {
    name: 'tofu',
    hex: 'e8e3d9',
  },
  '12-0110': {
    name: 'pistachio-shell',
    hex: 'd7cfbb',
  },
  '12-0646': {
    name: 'celandine',
    hex: 'ebdf67',
  },
  '12-0742': {
    name: 'lemon-verbena',
    hex: 'f3e779',
  },
  '12-1110': {
    name: 'creme-de-peche',
    hex: 'f5d6c6',
  },
  '12-1813': {
    name: 'marys-rose',
    hex: 'f7d1d4',
  },
  '12-2901': {
    name: 'morganite',
    hex: 'dfcdc6',
  },
  '12-2907': {
    name: 'rose-water',
    hex: 'f8e0e7',
  },
  '12-4301': {
    name: 'almond-milk',
    hex: 'd6cebe',
  },
  '13-0443': {
    name: 'lime-popsicle',
    hex: 'c0db3a',
  },
  '13-0644': {
    name: 'golden-kiwi',
    hex: 'f3dd3e',
  },
  '13-0646': {
    name: 'meadowlark',
    hex: 'ead94e',
  },
  '13-0651': {
    name: 'evening-primrose',
    hex: 'ccdb1e',
  },
  '13-0849': {
    name: 'habanero-gold',
    hex: 'fed450',
  },
  '13-0851': {
    name: 'minion-yellow',
    hex: 'fed55d',
  },
  '13-0919': {
    name: 'soybean',
    hex: 'd2c29d',
  },
  '13-0946': {
    name: 'jurassic-gold',
    hex: 'e7aa56',
  },
  '13-1105': {
    name: 'brown-rice',
    hex: 'c7bba4',
  },
  '13-1125': {
    name: 'peach-quartz',
    hex: 'f5b895',
  },
  '13-1208': {
    name: 'peachy-keen',
    hex: 'e2bdb3',
  },
  '13-1308': {
    name: 'brazilian-sand',
    hex: 'dacab7',
  },
  '13-1511': {
    name: 'pink-salt',
    hex: 'f7cdc7',
  },
  '13-1520': {
    name: 'rose-quartz',
    hex: 'f7cac9',
  },
  '13-2808': {
    name: 'ballet-slipper',
    hex: 'ebced5',
  },
  '13-3207': {
    name: 'cherry-blossom',
    hex: 'f7cee0',
  },
  '13-4104': {
    name: 'antarctica',
    hex: 'c6c5c6',
  },
  '13-4201': {
    name: 'oyster-mushroom',
    hex: 'c3c6c8',
  },
  '13-4720': {
    name: 'tanager-turquoise',
    hex: '91dce8',
  },
  '13-4810': {
    name: 'limpet-shell',
    hex: '98ddde',
  },
  '13-5410': {
    name: 'iced-aqua',
    hex: 'abd3db',
  },
  '14-0340': {
    name: 'acid-lime',
    hex: 'badf30',
  },
  '14-0952': {
    name: 'spicy-mustard',
    hex: 'd8ae47',
  },
  '14-1052': {
    name: 'kumquat',
    hex: 'fbaa4c',
  },
  '14-1208': {
    name: 'irish-cream',
    hex: 'c0ac92',
  },
  '14-1241': {
    name: 'orange-chiffon',
    hex: 'f9aa7d',
  },
  '14-1315': {
    name: 'hazelnut',
    hex: 'cfb095',
  },
  '14-1803': {
    name: 'sepia-rose',
    hex: 'd4bab6',
  },
  '14-3906': {
    name: 'raindrops',
    hex: 'b1aab3',
  },
  '14-3912': {
    name: 'zen-blue',
    hex: '9fa9be',
  },
  '14-4107': {
    name: 'quiet-gray',
    hex: 'b9babd',
  },
  '14-4122': {
    name: 'airy-blue',
    hex: '92b6d5',
  },
  '14-4202': {
    name: 'harbor-mist',
    hex: 'afb1b4',
  },
  '14-4315': {
    name: 'sea-angel',
    hex: '98bfca',
  },
  '14-4320': {
    name: 'baltic-sea',
    hex: '79b5db',
  },
  '14-4615': {
    name: 'antiqua-sand',
    hex: '83c2cd',
  },
  '14-4620': {
    name: 'island-paradise',
    hex: '95dee3',
  },
  '14-4710': {
    name: 'tibetan-stone',
    hex: '82c2c7',
  },
  '15-0960': {
    name: 'mango-mojito',
    hex: 'd69c2f',
  },
  '15-1020': {
    name: 'ginger-root',
    hex: 'bfa58a',
  },
  '15-1040': {
    name: 'iced-coffee',
    hex: 'b18f6a',
  },
  '15-1045': {
    name: 'autumn-blaze',
    hex: 'd9922e',
  },
  '15-1051': {
    name: 'golden-orange',
    hex: 'd7942d',
  },
  '15-1125': {
    name: 'porcini',
    hex: 'cca580',
  },
  '15-1151': {
    name: 'iceland-poppy',
    hex: 'f4963a',
  },
  '15-1243': {
    name: 'papaya',
    hex: 'fea166',
  },
  '15-1262': {
    name: 'carrot-curl',
    hex: 'fe8c18',
  },
  '15-1264': {
    name: 'turmeric',
    hex: 'fe840e',
  },
  '15-1335': {
    name: 'tangelo',
    hex: 'fe7e03',
  },
  '15-1425': {
    name: 'fenugreek',
    hex: 'c0916c',
  },
  '15-1429': {
    name: 'dusted-clay',
    hex: 'cc7357',
  },
  '15-1430': {
    name: 'pastry-shell',
    hex: 'bd8c66',
  },
  '15-1520': {
    name: 'blooming-dahlia',
    hex: 'eb9687',
  },
  '15-3520': {
    name: 'crocus-petal',
    hex: 'b99bc5',
  },
  '15-3716': {
    name: 'purple-rose',
    hex: 'b09fca',
  },
  '15-3720': {
    name: 'lilac-breeze',
    hex: 'b3a0c9',
  },
  '15-3919': {
    name: 'serenity',
    hex: '91a8d0',
  },
  '15-4428': {
    name: 'crystal-seas',
    hex: '5dafce',
  },
  '16-0543': {
    name: 'golden-lime',
    hex: '9a9738',
  },
  '16-0545': {
    name: 'split-pea',
    hex: '9c9a40',
  },
  '16-0550': {
    name: 'lentil-sprout',
    hex: 'aba44d',
  },
  '16-1103': {
    name: 'pure-cashmere',
    hex: 'ada396',
  },
  '16-1345': {
    name: 'sun-baked',
    hex: 'd27f63',
  },
  '16-1347': {
    name: 'peach-caramel',
    hex: 'c5733d',
  },
  '16-1348': {
    name: 'tomato-cream',
    hex: 'c57644',
  },
  '16-1358': {
    name: 'orange-tiger',
    hex: 'f96714',
  },
  '16-1438': {
    name: 'meerkat',
    hex: 'a46f44',
  },
  '16-1453': {
    name: 'exotic-orange',
    hex: 'f96531',
  },
  '16-1460': {
    name: 'dragon-fire',
    hex: 'fc642d',
  },
  '16-1545': {
    name: 'coral-quartz',
    hex: 'f77464',
  },
  '16-1548': {
    name: 'peach-echo',
    hex: 'f7786b',
  },
  '16-1606': {
    name: 'purple-dove',
    hex: '98878c',
  },
  '16-3720': {
    name: 'sand-verbena',
    hex: '9f90c1',
  },
  '16-3905': {
    name: 'lilac-gray',
    hex: '9896a4',
  },
  '16-4033': {
    name: 'granada-sky',
    hex: '5d81bb',
  },
  '17-0630': {
    name: 'tree-house',
    hex: '988c75',
  },
  '17-0949': {
    name: 'chai-tea',
    hex: 'b1832f',
  },
  '17-1052': {
    name: 'roasted-pecan',
    hex: '93592b',
  },
  '17-1105': {
    name: 'roasted-cashew',
    hex: '918579',
  },
  '17-1108': {
    name: 'winter-twig',
    hex: '948a7a',
  },
  '17-1115': {
    name: 'petrified-oak',
    hex: '8d7960',
  },
  '17-1142': {
    name: 'argan-oil',
    hex: '8b593e',
  },
  '17-1145': {
    name: 'autumn-maple',
    hex: 'c46215',
  },
  '17-1314': {
    name: 'sepia-tint',
    hex: '897560',
  },
  '17-1345': {
    name: 'spice-route',
    hex: 'b95b3f',
  },
  '17-1361': {
    name: 'scarlet-ibis',
    hex: 'f45520',
  },
  '17-1450': {
    name: 'summer-fig',
    hex: 'be4b3b',
  },
  '17-1708': {
    name: 'moonscape',
    hex: '725f69',
  },
  '17-1926': {
    name: 'fruit-dove',
    hex: 'ce5b78',
  },
  '17-2034': {
    name: 'pink-yarrow',
    hex: 'ce3175',
  },
  '17-2411': {
    name: 'toadstool',
    hex: '988088',
  },
  '17-3240': {
    name: 'bodacious',
    hex: 'b76ba3',
  },
  '17-3520': {
    name: 'diffused-orchid',
    hex: '9879a2',
  },
  '17-3640': {
    name: 'fairy-wren',
    hex: '9479af',
  },
  '17-3735': {
    name: 'sunlit-allium',
    hex: '9787bb',
  },
  '17-3914': {
    name: 'sharkskin',
    hex: '838487',
  },
  '17-3929': {
    name: 'pale-iris',
    hex: '8895c5',
  },
  '17-3940': {
    name: 'iolite',
    hex: '707bb4',
  },
  '17-4016': {
    name: 'gray-flannel',
    hex: '848182',
  },
  '17-4028': {
    name: 'riverside',
    hex: '4c6a92',
  },
  '17-4029': {
    name: 'quiet-harbor',
    hex: '5a789a',
  },
  '17-4032': {
    name: 'lichen-blue',
    hex: '5d89b3',
  },
  '17-4033': {
    name: 'pacific-coast',
    hex: '5480ac',
  },
  '17-4245': {
    name: 'ibiza-blue',
    hex: '007cb7',
  },
  '17-4429': {
    name: 'navagio-bay',
    hex: '3183a0',
  },
  '17-4530': {
    name: 'barrier-reef',
    hex: '0084a1',
  },
  '17-0530': {
    name: 'guacamole',
    hex: '797b3a',
  },
  '18-0107': {
    name: 'kale',
    hex: '5a7247',
  },
  '18-0220': {
    name: 'mayfly',
    hex: '65663f',
  },
  '18-0330': {
    name: 'twist-of-lime',
    hex: '4e632c',
  },
  '18-0625': {
    name: 'martini-olive',
    hex: '716a4d',
  },
  '18-1028': {
    name: 'emperador',
    hex: '684832',
  },
  '18-1049': {
    name: 'thai-curry',
    hex: 'ab6819',
  },
  '18-1050': {
    name: 'honey-ginger',
    hex: 'a86217',
  },
  '18-1155': {
    name: 'sugar-almond',
    hex: '935529',
  },
  '18-1325': {
    name: 'spiced-apple',
    hex: '783937',
  },
  '18-1440': {
    name: 'chili-oil',
    hex: '8e3c36',
  },
  '18-1506': {
    name: 'plum-truffle',
    hex: '675657',
  },
  '18-1541': {
    name: 'brandy-brown',
    hex: '73362a',
  },
  '18-1549': {
    name: 'valiant-poppy',
    hex: 'bc322c',
  },
  '18-1551': {
    name: 'aura-orange',
    hex: 'b4262a',
  },
  '18-1653': {
    name: 'toreador',
    hex: 'b61032',
  },
  '18-1654': {
    name: 'lychee',
    hex: 'ba0b32',
  },
  '18-1659': {
    name: 'goji-berry',
    hex: 'b91228',
  },
  '18-1705': {
    name: 'arctic-dusk',
    hex: '735b6a',
  },
  '18-1708': {
    name: 'ephemera',
    hex: '6f5965',
  },
  '18-1759': {
    name: 'jalapeno-red',
    hex: 'b2103c',
  },
  '18-1951': {
    name: 'love-potion',
    hex: 'c01352',
  },
  '18-2045': {
    name: 'pink-peacock',
    hex: 'c62168',
  },
  '18-3014': {
    name: 'grape-kiss',
    hex: '7b4368',
  },
  '18-3120': {
    name: 'willowherb',
    hex: '8e4483',
  },
  '18-3340': {
    name: 'charisma',
    hex: '632a60',
  },
  '18-3521': {
    name: 'plum-jam',
    hex: '624076',
  },
  '18-3530': {
    name: 'lavender-crystal',
    hex: '936a98',
  },
  '18-3540': {
    name: 'purple-sapphire',
    hex: '6f4685',
  },
  '18-3634': {
    name: 'chive-blossom',
    hex: '7d5d99',
  },
  '18-3839': {
    name: 'purple-corallite',
    hex: '5a4e8f',
  },
  '18-3908': {
    name: 'volcanic-glass',
    hex: '615c60',
  },
  '18-3917': {
    name: 'gray-blue',
    hex: '4d587a',
  },
  '18-3929': {
    name: 'blue-horizon',
    hex: '4e6482',
  },
  '18-3950': {
    name: 'iris-bloom',
    hex: '5b609e',
  },
  '18-4048': {
    name: 'nebulas-blue',
    hex: '2d62a3',
  },
  '18-4250': {
    name: 'indigo-bunting',
    hex: '006ca9',
  },
  '18-4430': {
    name: 'fjord-blue',
    hex: '00,7290',
  },
  '18-4538': {
    name: 'hawaiian-surf',
    hex: '0078a7',
  },
  '18-4630': {
    name: 'tahitian-tide',
    hex: '006b7e',
  },
  '18-5025': {
    name: 'quetzal-green',
    hex: '00,6865',
  },
  '18-5204': {
    name: 'granite-gray',
    hex: '615e,5f',
  },
  '18-5845': {
    name: 'lush-meadow',
    hex: '006e,51',
  },
  '19-0203': {
    name: 'gray-pinstripe',
    hex: '49494d',
  },
  '19-0403': {
    name: 'sea-turtle',
    hex: '5e5749',
  },
  '19-0413': {
    name: 'deep-depths',
    hex: '46483c',
  },
  '19-0510': {
    name: 'kalamata',
    hex: '5f5b4c',
  },
  '19-0823': {
    name: 'crocodile',
    hex: '5d5348',
  },
  '19-1110': {
    name: 'chocolate-plum',
    hex: '3c2d2e',
  },
  '19-1214': {
    name: 'chocolate-lab',
    hex: '5c3e35',
  },
  '19-1215': {
    name: 'shaved-chocolate',
    hex: '543b35',
  },
  '19-1224': {
    name: 'fondue-fudge',
    hex: '5d4236',
  },
  '19-1233': {
    name: 'tiramisu',
    hex: '634235',
  },
  '19-1234': {
    name: 'rocky-road',
    hex: '5a3e36',
  },
  '19-1419': {
    name: 'chicory-coffee',
    hex: '4a342e',
  },
  '19-1429': {
    name: 'smoked-paprika',
    hex: '6e362c',
  },
  '19-1432': {
    name: 'chocolate-fondant',
    hex: '56352d',
  },
  '19-1435': {
    name: 'cherry-mahogany',
    hex: '66352b',
  },
  '19-1534': {
    name: 'merlot',
    hex: '72262c',
  },
  '19-1536': {
    name: 'red-pear',
    hex: '7b3539',
  },
  '19-2420': {
    name: 'pickled-beet',
    hex: '4d233d',
  },
  '19-2429': {
    name: 'plum-caspia',
    hex: '61224a',
  },
  '19-2620': {
    name: 'winter-bloom',
    hex: '47243b',
  },
  '19-3425': {
    name: 'spiced-plum',
    hex: '6d4773',
  },
  '19-3750': {
    name: 'violet-indigo',
    hex: '3e285c',
  },
  '19-3831': {
    name: 'maritime-blue',
    hex: '27293d',
  },
  '19-3902': {
    name: 'obsidian',
    hex: '3a363b',
  },
  '19-3911': {
    name: 'black-beauty',
    hex: '26262a',
  },
  '19-3917': {
    name: 'blackened-pearl',
    hex: '4d4b50',
  },
  '19-3930': {
    name: 'odyssey-gray',
    hex: '434452',
  },
  '19-4003': {
    name: 'black-onyx',
    hex: '2b272b',
  },
  '19-4029': {
    name: 'navy-peony',
    hex: '223a5e',
  },
  '19-4031': {
    name: 'sargasso-sea',
    hex: '35435a',
  },
  '19-4034': {
    name: 'sailor-blue',
    hex: '0e3a53',
  },
  '19-4038': {
    name: 'gibraltar-sea',
    hex: '123850',
  },
  '19-4045': {
    name: 'lapis-blue',
    hex: '004b8d',
  },
  '19-4048': {
    name: 'baleine-blue',
    hex: '155187',
  },
  '19-4055': {
    name: 'galaxy-blue',
    hex: '2a4b7c',
  },
  '19-4120': {
    name: 'blue-opal',
    hex: '0f3b57',
  },
  '19-4122': {
    name: 'moonlit-ocean',
    hex: '293b4d',
  },
  '19-4126': {
    name: 'deep-dive',
    hex: '29495c',
  },
  '19-4536': {
    name: 'crystal-teal',
    hex: '00637c',
  },
  '19-4540': {
    name: 'deep-lagoon',
    hex: '00,5265',
  },
  '19-5030': {
    name: 'sea-moss',
    hex: '254445',
  },
  '19-5230': {
    name: 'forest-biome',
    hex: '184a45',
  },
  '19-5232': {
    name: 'rain-forest',
    hex: '15463e',
  },
};

const names = [];

Object.keys(generatePantone).forEach((key) => {
  // if (pantone[key].hex.match(',')) {
  //   console.log(pantone[key]);
  // }

  const RGB = HEXtoRGB(
    `#${generatePantone[key].hex.replaceAll(',', '')}`.toUpperCase()
  );

  const HSL = HEXtoHSL(
    `#${generatePantone[key].hex.replaceAll(',', '')}`.toUpperCase()
  );

  if (!RGB || !HSL) {
    console.log({ hex: generatePantone[key].hex, RGB, HSL });
  }

  names.push({
    name: generatePantone[key].name,
    hex: `#${generatePantone[key].hex.replace(',', '')}`.toUpperCase(),
    rgb: RGB,
    hsl: HSL,
  });
});

const fs = require('fs');

fs.writeFile(
  'pantone.ts',
  `const pantone = ${JSON.stringify(names)}; export default pantone`,
  (err) => {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
  }
);
