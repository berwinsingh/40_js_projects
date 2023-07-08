const generateBtn = document.getElementById("generate");
const parasToCreate = document.getElementById("number-of-paras");
const paraPlaceholder = document.querySelector(".answer-text");

const randomText = [
  "I'm baby sustainable organic jianbing paleo yr hoodie bushwick pour-over. Schlitz taiyaki semiotics sartorial keffiyeh gatekeep actually stumptown green juice swag. Fixie authentic iceland keytar raclette blog hella. Sustainable narwhal ugh truffaut mumblecore VHS unicorn. Kinfolk coloring book letterpress bicycle rights beard biodiesel gochujang cray banjo, cliche plaid. Vibecession swag sartorial actually mumblecore narwhal twee microdosing disrupt pinterest thundercats artisan austin. Letterpress banjo church-key, yuccie man bun intelligentsia try-hard 8-bit.",
  "Heirloom wolf PBR&B succulents crucifix shaman photo booth. Disrupt seitan poutine cupping craft beer offal. Everyday carry PBR&B succulents, vape yes plz vexillologist iceland plaid taiyaki glossier affogato. Normcore tattooed mixtape polaroid tacos, vexillologist taiyaki. Dreamcatcher praxis enamel pin marfa poutine. Ugh etsy banjo ramps grailed. Tattooed keffiyeh raw denim, bushwick grailed iPhone pork belly cornhole health goth thundercats authentic farm-to-table.",
  "Vaporware pabst master cleanse, beard gochujang unicorn hashtag occupy vinyl. Vexillologist farm-to-table plaid selfies woke. Raw denim migas kale chips flannel succulents seitan big mood franzen VHS sus taiyaki banh mi man braid. Hammock neutra freegan, williamsburg pinterest taxidermy chartreuse flexitarian lomo VHS. Intelligentsia stumptown palo santo blue bottle.",
  "Organic la croix listicle, keytar gluten-free lomo sus try-hard offal marxism small batch post-ironic mumblecore. Hammock solarpunk small batch hexagon tilde fingerstache, whatever helvetica. Sustainable selfies schlitz chillwave tbh unicorn williamsburg heirloom. Meggings street art pabst, austin +1 vape church-key tumeric. Cold-pressed try-hard wayfarers selfies kale chips single-origin coffee, before they sold out normcore marxism actually franzen. Cardigan actually letterpress sriracha vibecession forage.",
  "Messenger bag vegan Brooklyn heirloom sriracha. Fit literally photo booth pug chambray schlitz banh mi jianbing poke letterpress poutine vegan. Keytar JOMO butcher tilde. Cornhole brunch small batch raw denim, DSA sriracha kogi lomo tattooed hexagon hammock viral raclette. Butcher pitchfork unicorn heirloom mukbang. Meditation man bun blog kinfolk mukbang celiac.",
  "Sustainable literally twee helvetica bicycle rights prism pok pok vinyl man braid. Knausgaard bespoke etsy fashion axe blue bottle, iceland 8-bit venmo messenger bag tattooed vape organic. Disrupt unicorn solarpunk godard, leggings copper mug mukbang dreamcatcher. Synth normcore swag, heirloom plaid chartreuse neutra neutral milk hotel pug sriracha. Retro 3 wolf moon hell of YOLO deep v church-key subway tile mlkshk. Meditation paleo palo santo four dollar toast godard XOXO JOMO hexagon selvage.",
  "Shabby chic chicharrones fingerstache, XOXO green juice VHS jawn truffaut. Heirloom hell of aesthetic semiotics, small batch +1 coloring book lyft kombucha vexillologist single-origin coffee. Venmo aesthetic vaporware ramps schlitz. Same chartreuse banjo aesthetic yuccie four loko godard wayfarers, coloring book flannel blog shaman try-hard trust fund tonx. Put a bird on it man braid banjo cloud bread chartreuse la croix.",
  "Banjo tacos tousled cray butcher JOMO shabby chic. PBR&B man braid DSA blue bottle helvetica semiotics lomo. Marfa cronut swag gluten-free wolf chartreuse. Tbh solarpunk pug jean shorts, kogi vice vape master cleanse irony cred waistcoat viral flannel shoreditch venmo. Farm-to-table salvia flannel cliche tonx art party DSA next level kinfolk.",
  "Taiyaki plaid adaptogen succulents fit kombucha keytar scenester synth cupping forage. Hell of you probably haven't heard of them skateboard humblebrag try-hard enamel pin jianbing cloud bread flannel disrupt meditation freegan succulents. Kale chips pork belly godard bicycle rights meh, DIY kitsch plaid +1 hoodie prism same fixie. Fam JOMO bushwick bitters big mood narwhal kale chips four dollar toast paleo ascot tbh.",
  "Try-hard edison bulb stumptown tattooed yr pinterest you probably haven't heard of them shabby chic mukbang pabst sartorial. Meh enamel pin fit air plant pork belly mumblecore man bun, taxidermy retro. Bicycle rights chillwave portland hammock, listicle aesthetic dreamcatcher hella cardigan. Shoreditch flexitarian hell of craft beer. Tumeric tacos same kombucha yr. Forage cloud bread chambray sus cred hell of tumblr distillery XOXO same air plant typewriter authentic cray. Whatever master cleanse scenester salvia you probably haven't heard of them shaman, DIY seitan craft beer deep v vinyl cliche gluten-free stumptown skateboard.",
];


generateBtn.addEventListener("click", () => {
    
    if(paraPlaceholder.hasChildNodes()){
        while(paraPlaceholder.hasChildNodes()){
            paraPlaceholder.removeChild(paraPlaceholder.firstChild);
        }
    }

    const extactedVal = parseInt(parasToCreate.value);
    
    if (isNaN(extactedVal)) {
        alert("Please enter a valid number value");
    }
    else{
        for(let i=0;i<extactedVal;i++){
            let newPara = document.createElement(`p`);
            newPara.textContent = randomText[Math.floor(Math.random()*randomText.length)];
            paraPlaceholder.appendChild(newPara);
        }
        parasToCreate.value = "";
    }
});
