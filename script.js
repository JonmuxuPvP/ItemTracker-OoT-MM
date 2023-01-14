import { Item, MultipleItem, Inventory, Equipment, Songs } from "./scripts/utilities.js";

const equipment = new Equipment();
const bulletBag = new MultipleItem(["./assets/ocarina-of-time/bullet-bag-(30).png",
									"./assets/ocarina-of-time/bullet-bag-(40).png",
								    "./assets/ocarina-of-time/bullet-bag-(50).png"]);

const quiver = new MultipleItem(["./assets/ocarina-of-time/quiver-(30).png",
								    "./assets/ocarina-of-time/quiver-(40).png",
								    "./assets/ocarina-of-time/quiver-(50).png"]);

const bombBag = new MultipleItem(["./assets/ocarina-of-time/bomb-bag-(20).png",
								  "./assets/ocarina-of-time/bomb-bag-(30).png",
								  "./assets/ocarina-of-time/bomb-bag-(40).png"]);

const strength = new MultipleItem(["./assets/ocarina-of-time/goron-bracelet.png",
								  "./assets/ocarina-of-time/silver-gauntlets.png",
								  "./assets/ocarina-of-time/golden-gauntlets.png"]);

const scale = new MultipleItem(["./assets/ocarina-of-time/silver-scale.png",
								  "./assets/ocarina-of-time/gold-scale.png"]);

const kokiriSword = new Item("./assets/ocarina-of-time/kokiri-sword.png");
const masterSword = new Item("./assets/ocarina-of-time/master-sword.png");
const biggoronsSword = new Item("./assets/ocarina-of-time/biggorons-sword.png");

const dekuShield = new Item("./assets/ocarina-of-time/deku-shield.png");
const hylianShield = new Item("./assets/ocarina-of-time/hylian-shield.png");
const mirrorShieldOoT = new Item("./assets/ocarina-of-time/mirror-shield.png");

const kokiriTunic = new Item("./assets/ocarina-of-time/kokiri-tunic.png", true);
const goronTunic = new Item("./assets/ocarina-of-time/goron-tunic.png");
const zoraTunic = new Item("./assets/ocarina-of-time/zora-tunic.png");

const kokiriBoots = new Item("./assets/ocarina-of-time/kokiri-boots.png", true);
const ironBoots = new Item("./assets/ocarina-of-time/iron-boots.png");
const hoverBoots = new Item("./assets/ocarina-of-time/hover-boots.png");

equipment.setItem(bulletBag, 1);
equipment.setItem(quiver, 2);
equipment.setItem(bombBag, 3);
equipment.setItem(strength, 4);
equipment.setItem(scale, 5);

equipment.setItem(kokiriSword, 6);
equipment.setItem(masterSword, 7);
equipment.setItem(biggoronsSword, 8);

equipment.setItem(dekuShield, 9);
equipment.setItem(hylianShield, 10);
equipment.setItem(mirrorShieldOoT, 11);

equipment.setItem(kokiriTunic, 12);
equipment.setItem(goronTunic, 13);
equipment.setItem(zoraTunic, 14);

equipment.setItem(kokiriBoots, 15);
equipment.setItem(ironBoots, 16);
equipment.setItem(hoverBoots, 17);

const majorasInventory = new Inventory(378, 261);

const ocarinaMM = new Item("./assets/majoras-mask/ocarina-of-time.png");
const herosBow = new Item("./assets/majoras-mask/heros-bow.png");
const fireArrowMM = new Item("./assets/majoras-mask/fire-arrow.png");
const iceArrowMM = new Item("./assets/majoras-mask/ice-arrow.png");
const lightArrowMM = new Item("./assets/majoras-mask/light-arrow.png");
const tradeItemOne = new MultipleItem(["./assets/majoras-mask/moons-tear.png", 
									   "./assets/majoras-mask/land-title-deed.png", 
									   "./assets/majoras-mask/swamp-title-deed.png", 
									   "./assets/majoras-mask/mountain-title-deed.png", 
								       "./assets/majoras-mask/ocean-title-deed.png"]);

const bombsMM = new Item("./assets/majoras-mask/bomb.png");
const bombchusMM = new Item("./assets/majoras-mask/bombchu.png");
const dekuSticksMM = new Item("./assets/majoras-mask/deku-stick.png");
const dekuNutsMM = new Item("./assets/majoras-mask/deku-nut.png");
const magicBeanMM = new Item("./assets/majoras-mask/magic-beans.png");
const tradeItemTwo = new MultipleItem(["./assets/majoras-mask/room-key.png", "./assets/majoras-mask/special-delivery-to-mama.png"]);

const powderKeg = new Item("./assets/majoras-mask/powder-keg.png");
const pictobox = new Item("./assets/majoras-mask/pictograph-box.png");
const lensOfTruthMM = new Item("./assets/majoras-mask/lens-of-truth.png");
const hookshotMM = new Item("./assets/majoras-mask/hookshot.png");
const greatFairySword = new Item("./assets/majoras-mask/great-fairys-sword.png");
const tradeItemThree = new MultipleItem(["./assets/majoras-mask/letter-to-kafei.png", "./assets/majoras-mask/pendant-of-memories.png"]);

majorasInventory.setItem(ocarinaMM, 1);
majorasInventory.setItem(herosBow, 2);
majorasInventory.setItem(fireArrowMM, 3);
majorasInventory.setItem(iceArrowMM, 4);
majorasInventory.setItem(lightArrowMM, 5);
majorasInventory.setItem(tradeItemOne, 6);

majorasInventory.setItem(bombsMM, 7);
majorasInventory.setItem(bombchusMM, 8);
majorasInventory.setItem(dekuSticksMM, 9);
majorasInventory.setItem(dekuNutsMM, 10);
majorasInventory.setItem(magicBeanMM, 11);
majorasInventory.setItem(tradeItemTwo, 12);

majorasInventory.setItem(powderKeg, 13);
majorasInventory.setItem(pictobox, 14);
majorasInventory.setItem(lensOfTruthMM, 15);
majorasInventory.setItem(hookshotMM, 16);
majorasInventory.setItem(greatFairySword, 17);
majorasInventory.setItem(tradeItemThree, 18);

for (let i = 0; i < 6; i++) {
	const bottle = new Item("./assets/majoras-mask/empty-bottle.png");
	majorasInventory.setItem(bottle, 19 + i);
}

const masksInventory = new Inventory(45, 261);

const postmanHat = new Item("./assets/majoras-mask/postmans-hat.png");
const allNightMask = new Item("./assets/majoras-mask/all-night-mask.png");
const blastMask = new Item("./assets/majoras-mask/blast-mask.png");
const stoneMask = new Item("./assets/majoras-mask/stone-mask.png");
const greatFairyMask = new Item("./assets/majoras-mask/great-fairys-mask.png");
const dekuMask = new Item("./assets/majoras-mask/deku-mask.png");

const keatonMask = new Item("./assets/majoras-mask/keaton-mask.png");
const bremenMask = new Item("./assets/majoras-mask/bremen-mask.png");
const bunnyHood = new Item("./assets/majoras-mask/bunny-hood.png");
const donGerosMask = new Item("./assets/majoras-mask/don-geros-mask.png");
const maskOfScents = new Item("./assets/majoras-mask/mask-of-scents.png");
const goronMask = new Item("./assets/majoras-mask/goron-mask.png");

const romanisMask = new Item("./assets/majoras-mask/romanis-mask.png");
const circusLeadersMask = new Item("./assets/majoras-mask/circus-leaders-mask.png");
const kafeisMask = new Item("./assets/majoras-mask/kafeis-mask.png");
const couplesMask = new Item("./assets/majoras-mask/couples-mask.png");
const maskOfTruth = new Item("./assets/majoras-mask/mask-of-truth.png");
const zoraMask = new Item("./assets/majoras-mask/zora-mask.png");

const kamarosMask = new Item("./assets/majoras-mask/kamaros-mask.png");
const gibdoMask = new Item("./assets/majoras-mask/gibdo-mask.png");
const garosMask = new Item("./assets/majoras-mask/garos-mask.png");
const captainsHat = new Item("./assets/majoras-mask/captains-hat.png");
const giantsMask = new Item("./assets/majoras-mask/giants-mask.png");
const fierceDeity = new Item("./assets/majoras-mask/fierce-deitys-mask.png");

masksInventory.setItem(postmanHat, 1);
masksInventory.setItem(allNightMask, 2);
masksInventory.setItem(blastMask, 3);
masksInventory.setItem(stoneMask, 4);
masksInventory.setItem(greatFairyMask, 5);
masksInventory.setItem(dekuMask, 6);

masksInventory.setItem(keatonMask, 7);
masksInventory.setItem(bremenMask, 8);
masksInventory.setItem(bunnyHood, 9);
masksInventory.setItem(donGerosMask, 10);
masksInventory.setItem(maskOfScents, 11);
masksInventory.setItem(goronMask, 12);

masksInventory.setItem(romanisMask, 13);
masksInventory.setItem(circusLeadersMask, 14);
masksInventory.setItem(kafeisMask, 15);
masksInventory.setItem(couplesMask, 16);
masksInventory.setItem(maskOfTruth, 17);
masksInventory.setItem(zoraMask, 18);

masksInventory.setItem(kamarosMask, 19);
masksInventory.setItem(gibdoMask, 20);
masksInventory.setItem(garosMask, 21);
masksInventory.setItem(captainsHat, 22);
masksInventory.setItem(giantsMask, 23);
masksInventory.setItem(fierceDeity, 24);

const ocarinaInventory = new Inventory(378, 42);

const dekuSticksOoT = new Item("./assets/ocarina-of-time/deku-stick.png");
const dekuNutsOoT = new Item("./assets/ocarina-of-time/deku-nut.png");
const bombsOoT = new Item("./assets/ocarina-of-time/bomb.png");
const bow = new Item("./assets/ocarina-of-time/fairy-bow.png");
const fireArrowOoT = new Item("./assets/ocarina-of-time/fire-arrow.png");
const dinsFire = new Item("./assets/ocarina-of-time/dins-fire.png");

const slingshot = new Item("./assets/ocarina-of-time/fairy-slingshot.png");
const ocarinaOfTime = new MultipleItem(["./assets/ocarina-of-time/fairy-ocarina.png", "./assets/ocarina-of-time/ocarina-of-time.png"]);
const bombchusOoT = new Item("./assets/ocarina-of-time/bombchu.png");
const hookshotOoT = new MultipleItem(["./assets/ocarina-of-time/hookshot.png", "./assets/ocarina-of-time/longshot.png"]);
const iceArrowOoT = new Item("./assets/ocarina-of-time/ice-arrow.png");
const faroresWind = new Item("./assets/ocarina-of-time/farores-wind.png");


const boomerang = new Item("./assets/ocarina-of-time/boomerang.png");
const lensOfTruthOoT = new Item("./assets/ocarina-of-time/lens-of-truth.png");
const magicBeansOoT = new Item("./assets/ocarina-of-time/magic-beans.png");
const megatonHammer = new Item("./assets/ocarina-of-time/megaton-hammer.png");
const lightArrows = new Item("./assets/ocarina-of-time/light-arrow.png");
const nayrusLove = new Item("./assets/ocarina-of-time/nayrus-love.png");

for (let i = 0; i < 4; i++) {
	const bottle = new Item("./assets/ocarina-of-time/empty-bottle.png");
	ocarinaInventory.setItem(bottle, 19 + i);
}

ocarinaInventory.setItem(dekuSticksOoT, 1);
ocarinaInventory.setItem(dekuNutsOoT, 2);
ocarinaInventory.setItem(bombsOoT, 3);
ocarinaInventory.setItem(bow, 4);
ocarinaInventory.setItem(fireArrowOoT, 5);
ocarinaInventory.setItem(dinsFire, 6);

ocarinaInventory.setItem(slingshot, 7);
ocarinaInventory.setItem(ocarinaOfTime, 8);
ocarinaInventory.setItem(bombchusOoT, 9);
ocarinaInventory.setItem(hookshotOoT, 10);
ocarinaInventory.setItem(iceArrowOoT, 11);
ocarinaInventory.setItem(faroresWind, 12);

ocarinaInventory.setItem(boomerang, 13);
ocarinaInventory.setItem(lensOfTruthOoT, 14);
ocarinaInventory.setItem(magicBeansOoT, 15);
ocarinaInventory.setItem(megatonHammer, 16);
ocarinaInventory.setItem(lightArrows, 17);
ocarinaInventory.setItem(nayrusLove, 18);

const songsOoT = new Songs(687, 148);

const zeldasLullaby = new Item("./assets/ocarina-of-time/zeldas-lullaby-(edit).png");
const eponasSongOoT = new Item("./assets/ocarina-of-time/eponas-song-(edit).png");
const sariasSong = new Item("./assets/ocarina-of-time/sarias-song-(edit).png");
const sunsSong = new Item("./assets/ocarina-of-time/suns-song-(edit).png");
const songOfTimeOoT = new Item("./assets/ocarina-of-time/song-of-time-(edit).png");
const songOfStormsOoT = new Item("./assets/ocarina-of-time/song-of-storms-(edit).png");

const minuetOfForest = new Item("./assets/ocarina-of-time/minuet-of-forest.png");
const boleroOfFire = new Item("./assets/ocarina-of-time/bolero-of-fire.png");
const serenadeOfWater = new Item("./assets/ocarina-of-time/serenade-of-water.png");
const requiemOfSpirit = new Item("./assets/ocarina-of-time/requiem-of-spirit.png");
const nocturneOfShadow = new Item("./assets/ocarina-of-time/nocturne-of-shadow.png");
const preludeOfLight = new Item("./assets/ocarina-of-time/prelude-of-light.png");


songsOoT.setItem(zeldasLullaby, 1);
songsOoT.setItem(eponasSongOoT, 2);
songsOoT.setItem(sariasSong, 3);
songsOoT.setItem(sunsSong, 4);
songsOoT.setItem(songOfTimeOoT, 5);
songsOoT.setItem(songOfStormsOoT, 6);

songsOoT.setItem(minuetOfForest, 7);
songsOoT.setItem(boleroOfFire, 8);
songsOoT.setItem(serenadeOfWater, 9);
songsOoT.setItem(requiemOfSpirit, 10);
songsOoT.setItem(nocturneOfShadow, 11);
songsOoT.setItem(preludeOfLight, 12);

const songsMM = new Songs(687, 359);

const songOfTimeMM = new Item("./assets/majoras-mask/song-of-time-(edit).png");
const songOfHealing = new Item("./assets/majoras-mask/song-of-healing-(edit).png");
const eponasSongMM = new Item("./assets/majoras-mask/eponas-song-(edit).png");
const songOfSoaring = new Item("./assets/majoras-mask/song-of-soaring-(edit).png");
const songOfStormsMM = new Item("./assets/majoras-mask/song-of-storms-(edit).png");

const sonataOfAwakening = new Item("./assets/majoras-mask/sonata-of-awakening.png");
const goronLullaby = new Item("./assets/majoras-mask/goron-lullaby.png");
const newWaveBossaNova = new Item("./assets/majoras-mask/new-wave-bossa-nova.png");
const elegyOfEmptiness = new Item("./assets/majoras-mask/elegy-of-emptiness.png");
const oathToOrder = new Item("./assets/majoras-mask/oath-to-order.png");

songsMM.setItem(songOfTimeMM, 1);
songsMM.setItem(songOfHealing, 2);
songsMM.setItem(eponasSongMM, 3);
songsMM.setItem(songOfSoaring, 4);
songsMM.setItem(songOfStormsMM, 5);

songsMM.setItem(sonataOfAwakening, 7);
songsMM.setItem(goronLullaby, 8);
songsMM.setItem(newWaveBossaNova, 9);
songsMM.setItem(elegyOfEmptiness, 10);
songsMM.setItem(oathToOrder, 11);
