const pulau = document.createElement("option");
const nama = document.createTextNode('jakarta');
const ngaran = document.createTextNode('bandung');
const namo = document.createTextNode('surabaya');

pulau.appendChild(nama);
pulau.appendChild(ngaran);
pulau.appendChild(namo);


const java = document.getElementById("1");
java.appendChild(pulau);

const daerah = document.getElementById("2");
daerah.appendChild(ngaran);

const negri = document.getElementById("3");
negri.appendChild(namo);




