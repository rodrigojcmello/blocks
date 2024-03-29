const crayola = [
  ['#DD8436', 'alloy orange'],
  ['#EED9C4', 'almond'],
  ['#C88A65', 'antique brass'],
  ['#FDD5B1', 'apricot'],
  ['#00FFFF', 'aqua'],
  ['#03BB85', 'aqua green'],
  ['#458B74', 'aqua marine'],
  ['#7BA05B', 'asparagus'],
  ['#FF9966', 'atomic tangerine'],
  ['#F0FFFF', 'azure'],
  ['#E7FEFF', 'baby blue'],
  ['#FBE7B2', 'banana mania'],
  ['#67C8FF', 'battery charge blue'],
  ['#4A47B2', "b'dazzled blue"],
  ['#926F5B', 'beaver'],
  ['#F7D19A', 'beige'],
  ['#C62D42', "big dip o'ruby"],
  ['#D29869', 'bisque'],
  ['#FE6F5E', 'bittersweet'],
  ['#CC5A3B', 'bittersweet shimmer'],
  ['#000000', 'black'],
  ['#000000', 'black stars'],
  ['#000000', 'black w/ glitzy gold'],
  ['#9F6958', 'blast off bronze'],
  ['#0066FF', 'blue'],
  ['#9999CC', 'blue bell'],
  ['#0095B6', 'blue green'],
  ['#0095B6', 'blue green w/ glitzy gold'],
  ['#4CB7A5', 'blue lagoon'],
  ['#38B0DE', 'blue sky'],
  ['#6456B7', 'blue violet'],
  ['#0066FF', 'blue w/ shimmering silver'],
  ['#DB5079', 'blush'],
  ['#1DA237', 'bottle green'],
  ['#C62D42', 'brick red'],
  ['#00EE00', 'bright green'],
  ['#FF6103', 'bright orange'],
  ['#FFFF00', 'brilliant yellow'],
  ['#CC8E34', 'bronze'],
  ['#AF593E', 'brown'],
  ['#FF7034', 'burnt orange'],
  ['#E97451', 'burnt sienna'],
  ['#A9B2C3', 'cadet blue'],
  ['#FFFF99', 'canary'],
  ['#00CC99', 'caribbean green'],
  ['#FFA6C9', 'carnation pink'],
  ['#FFA6C9', 'carnation pink w/ lavender'],
  ['#DA3287', 'cerise'],
  ['#02A4D3', 'cerulean'],
  ['#EBFF0D', 'chartreuse'],
  ['#EB5E66', 'cherry'],
  ['#B94E48', 'chestnut'],
  ['#006400', 'christmas green'],
  ['#B22222', 'christmas red'],
  ['#EB5E00', 'clementine'],
  ['#DA8A67', 'copper'],
  ['#E68070', 'coral red'],
  ['#C2B999', 'coral reef'],
  ['#93CCEA', 'cornflower'],
  ['#FFEF3F', 'cornsilk'],
  ['#FFB7D5', 'cotton candy'],
  ['#D5D5D5', 'crystal'],
  ['#00AEEF', 'cyan'],
  ['#00AEEF', 'cyber grape'],
  ['#FED85D', 'dandelion'],
  ['#003065', 'dark blue'],
  ['#8B8680', 'deep space sparkle'],
  ['#1560BD', 'denim'],
  ['#EDC9AF', 'desert sand'],
  ['#6F7285', 'dolphin gray'],
  ['#5D3B1A', 'earthtone'],
  ['#614051', 'eggplant'],
  ['#23B2EE', 'electric blue'],
  ['#CCFF00', 'electric lime'],
  ['#00C957', 'emerald'],
  ['#63B76C', 'fern'],
  ['#FEB300', 'fiery orange'],
  ['#F2583E', 'flamingo pink'],
  ['#83F52C', 'fluorescent green'],
  ['#FF8300', 'fluorescent orange'],
  ['#FF5AAC', 'fluorescent pink'],
  ['#5FA777', 'forest green'],
  ['#C154C1', 'fuchsia'],
  ['#87421F', 'fuzzy wuzzy'],
  ['#008AC4', 'gel fx blue'],
  ['#33B65B', 'gel fx green'],
  ['#B2E92E', 'gel fx lime green'],
  ['#F653A6', 'gel fx magenta'],
  ['#6D5194', 'gel fx purple'],
  ['#A9473A', 'gel fx rose'],
  ['#404E5A', 'gel fx slate'],
  ['#FFFFFF', 'gel fx white'],
  ['#FFFD7E', 'gel fx yellow'],
  ['#ED4652', 'gel fx red'],
  ['#CCFFCC', 'glow in the dark'],
  ['#51FF0D', 'glowing green'],
  ['#E6BE8A', 'gold'],
  ['#E6BE8A', 'gold fusion'],
  ['#A7825D', 'golden beige'],
  ['#C0BFB1', 'golden nugget'],
  ['#FFDF00', 'golden yellow'],
  ['#FCD667', 'goldenrod'],
  ['#9DE093', 'granny smith apple'],
  ['#3D9979', 'graphic green'],
  ['#84C011', 'grass green'],
  ['#8B8680', 'gray'],
  ['#768087', 'gray blue'],
  ['#01A368', 'green'],
  ['#01A368', 'green w/ twinkling turquoise'],
  ['#F1E788', 'green yellow'],
  ['#FF00CC', 'hot magenta'],
  ['#FF78CB', 'hot pink'],
  ['#9CBF0E', 'iguana green'],
  ['#05B277', 'illuminating emerald'],
  ['#B0E313', 'inchworm'],
  ['#4F69C6', 'indigo'],
  ['#C82536', 'infra red'],
  ['#0A6B0D', 'jade green'],
  ['#A50B5E', 'jazzberry jam'],
  ['#29AB87', 'jungle green'],
  ['#FFFF66', 'laser lemon'],
  ['#FBAED2', 'lavender'],
  ['#8FD8D8', 'light blue'],
  ['#A36F40', 'light brown'],
  ['#F5CFBF', 'light peach'],
  ['#F9C1BB', 'light pink'],
  ['#BC8AC2', 'lilac'],
  ['#32CD32', 'lime'],
  ['#B2E92E', 'lime green'],
  ['#FB551C', 'lobster red'],
  ['#FFB97B', 'macaroni and cheese'],
  ['#F653A6', 'magenta'],
  ['#CA3435', 'mahogany'],
  ['#8D90A1', 'manatee'],
  ['#FFCD48', 'mango'],
  ['#E77200', 'mango tango'],
  ['#C32148', 'maroon'],
  ['#C32148', 'maroon w/ glitzy gold'],
  ['#F091A9', 'mauvelous'],
  ['#20A455', 'meadow'],
  ['#FEBAAD', 'melon'],
  ['#0095B6', 'metallic seaweed'],
  ['#EDD63D', 'metallic sunburst'],
  ['#003366', 'midnight blue'],
  ['#1AB385', 'mountain meadow'],
  ['#0066CC', 'navy blue'],
  ['#FF9933', 'neon carrot'],
  ['#B0D12A', 'neon green'],
  ['#FAED27', 'neon yellow'],
  ['#928562', 'olive'],
  ['#B5B35C', 'olive green'],
  ['#FF681F', 'orange'],
  ['#FF7E00', 'orange circuit'],
  ['#FF681F', 'orange w/ twinkling turquoise'],
  ['#F8D568', 'orange yellow'],
  ['#E29CD2', 'orchid'],
  ['#E29CD2', 'orchid w/ twinkling turquoise'],
  ['#2D383A', 'outer space'],
  ['#FF6037', 'outrageous orange'],
  ['#009DC4', 'pacific blue'],
  ['#D1EDF2', 'pale blue'],
  ['#A7ED4D', 'pale green'],
  ['#7EB6FF', 'parakeet blue'],
  ['#80CEE1', 'pastel blue'],
  ['#739122', 'pea green'],
  ['#FFCBA4', 'peach'],
  ['#EEEBD9', 'pearl white'],
  ['#C3CDE6', 'periwinkle'],
  ['#A4509B', 'petite rose'],
  ['#FDD7E4', 'piggy pink'],
  ['#01796F', 'pine green'],
  ['#CD919E', 'pink'],
  ['#F7A38E', 'pink sherbert'],
  ['#843179', 'plum'],
  ['#FF93BE', 'primrose'],
  ['#652DC1', 'purple heart'],
  ['#D6AEDD', "purple mountains' majesty"],
  ['#FF00CC', 'purple pizzazz'],
  ['#FF6103', 'radical orange'],
  ['#FF355E', 'radical red'],
  ['#E96792', 'raspberry'],
  ['#D27D46', 'raw sienna'],
  ['#EED5D2', 'razzle dazzle rose'],
  ['#E30B5C', 'razzmatazz'],
  ['#843179', 'razzmic berry'],
  ['#ED0A3F', 'red'],
  ['#FF3F34', 'red orange'],
  ['#BB3385', 'red violet'],
  ['#BB3385', 'red violet w/ glitzy gold'],
  ['#ED0A3F', 'red w/ shimmering silver'],
  ['#00CCCC', "robin's egg blue"],
  ['#A9473A', 'rose'],
  ['#6B3FA0', 'royal purple'],
  ['#6B3FA0', 'royal purple w/ ruby red'],
  ['#FF91A4', 'salmon'],
  ['#D2B48C', 'sandy tan'],
  ['#FD0E35', 'scarlet'],
  ['#66FF66', 'scream green'],
  ['#93DFB8', 'sea green'],
  ['#71EEB8', 'seafoam green'],
  ['#9E5B40', 'sepia'],
  ['#837050', 'shadow'],
  ['#33CC99', 'shamrock'],
  ['#B2E69E', 'sheen green'],
  ['#E69296', 'shimmering blush'],
  ['#FF6FFF', 'shocking pink'],
  ['#5F4F3A', 'sienna'],
  ['#C9C0BB', 'silver'],
  ['#76D7EA', 'sky blue'],
  ['#76D7EA', 'sky blue w/ glitzy gold'],
  ['#404E5A', 'slate'],
  ['#8E8E8E', 'sonic silver'],
  ['#ECEBBD', 'spring green'],
  ['#69C17E', 'spruce'],
  ['#0B969B', 'steel blue'],
  ['#FAFD0F', 'sun yellow'],
  ['#FFCC33', 'sunglow'],
  ['#FE4C40', 'sunset orange'],
  ['#FA9D5A', 'tan'],
  ['#997C52', 'tawny'],
  ['#008080', 'teal'],
  ['#E38749', 'terra cotta'],
  ['#FC80A5', 'tickle me pink'],
  ['#CB7119', 'tiger orange'],
  ['#D9D6CF', 'timberwolf'],
  ['#00755E', 'tropical rain forest'],
  ['#4F2F4F', 'tropical violet'],
  ['#DEA681', 'tumbleweed'],
  ['#6CDAE7', 'turquoise blue'],
  ['#9A68AF', 'ultra violet'],
  ['#FFFF66', 'unmellow yellow'],
  ['#8359A3', 'violet (purple)'],
  ['#F7468A', 'violet red'],
  ['#FF9980', 'vivid tangerine'],
  ['#803790', 'vivid violet'],
  ['#93C4CF', 'waterfall'],
  ['#FFFFFF', 'white'],
  ['#D9E0E3', 'white shimmer'],
  ['#FFFFFF', 'white w/ confetti'],
  ['#FFFFFF', 'white w/ glitzy gold'],
  ['#7A89B8', 'wild blue yonder'],
  ['#783195', 'wild orchid'],
  ['#FF3399', 'wild strawberry'],
  ['#FD5B78', 'wild watermelon'],
  ['#C9A0DC', 'wisteria'],
  ['#FBE870', 'yellow'],
  ['#C5E17A', 'yellow green'],
  ['#C5E17A', 'yellow green w/ shimmering silver'],
  ['#FFAE42', 'yellow orange'],
  ['#FBE870', 'yellow w/ rainbow'],
];
export default crayola;
