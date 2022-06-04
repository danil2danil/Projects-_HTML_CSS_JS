/*let resort = document.querySelector(".resort")
let camping = document.querySelector(".camping")
let beach = document.querySelector(".beach")

resort.addEventListener("mouseover", function(){   
    resort.style.transform = "translateY(-25px)";
});
resort.addEventListener("mouseout", function(){
    resort.style.transform = "translateY(0px)";
});

camping.addEventListener("mouseover", function(){   
    camping.style.transform = "translateY(-25px)";
});
camping.addEventListener("mouseout", function(){
    camping.style.transform = "translateY(0px)";
});

beach.addEventListener("mouseover", function(){   
    beach.style.transform = "translateY(-25px)";
});
beach.addEventListener("mouseout", function(){
    beach.style.transform = "translateY(0px)";
});*/

const targets = [...document.querySelectorAll('.experiences_card')]
targets.forEach((target) => {
	target.addEventListener("mouseover", function(){   
	    target.style.transform = "translateY(-25px)";
	});
	target.addEventListener("mouseout", function(){
	    target.style.transform = "translateY(0px)";
	});
})




document.addEventListener("DOMContentLoaded", ()=>{
    const revlinks = [...document.querySelectorAll('.rev_link')];
    const rev_blocks = [...document.querySelectorAll('.review__text')];

    
    revlinks[0].style.border = "6px solid #3685FB";
    rev_blocks[0].style.display = "flex";
    rev_blocks[0].style.alignItems = "center";

    revlinks.forEach((revlink, index) =>{
        revlink.addEventListener("click", () => {
            rev_blocks.forEach((rev_block)=>{
                rev_block.style.display = "none";
            });
            rev_blocks[index].style.display = "flex";
            rev_blocks[index].style.alignItems = "center";
            revlinks.forEach((elem)=>{
                elem.style.border = "none";
            })
            switch(index){
                    case 0: 
                        revlink.style.border = "6px solid #3685FB";
                        rev_blocks[index].style.borderBottom = "10px solid #3685FB";
                        break;
                    case 1:
                        revlink.style.border = "6px solid #D93B30";
                        rev_blocks[index].style.borderBottom = "10px solid #D93B30";
                        break;
                    case 2:
                        revlink.style.border = "6px solid #9400D3";
                        rev_blocks[index].style.borderBottom = "10px solid #9400D3";
                        break;
                    case 3:
                        revlink.style.border = "6px solid #6A5ACD";
                        rev_blocks[index].style.borderBottom = "10px solid #6A5ACD";
                        break;
            }
            })
        })
})

