window.onload = async function currentUrl(){
const url = "https://api.staging.eo.care/union/profile/careplan?kuid=01GST99MNQ9FATZTQN82JXSSG7";
 
 fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
    window.localStorage.setItem("myObject", JSON.stringify(data[data]));
    });

    const newObject = window.localStorage.getItem("myObject");
    const me = JSON.parse(newObject);
document.getElementById('care-name').innerHTML = me.fname;
document.getElementById('care-date').innerHTML = me.care_plan.careplan_date;
document.getElementById('dosing-para').innerHTML = me.care_plan.why_recommended.dosing;
document.getElementById('mix-para').innerHTML = me.care_plan.why_recommended.product_mix;
document.getElementById('bedtime-para').innerHTML = me.care_plan.why_recommended.bedtime;
document.getElementById('one-name-disp').innerHTML = me.care_plan.dispensary_name;
document.getElementById('two-name-disp').innerHTML = me.care_plan.delivery_partner_name;
document.getElementById('one-name-disp').href = me.care_plan.pickup_partner_link;
document.getElementById('two-name-disp').href = me.care_plan.delivery_partner_link;

const deliveryValue = document.getElementById('delivery-div')
const pickupValue = document.getElementById('pickup-div')
const warningItalic = document.getElementById('warning')

if (me.care_plan.delivery_preference == false){
deliveryValue.style.display = 'none';
}
if (me.care_plan.delivery_preference == true){
pickupValue.style.display = 'none';
}
if (me.care_plan.careplan_contains_thc == false){
warningItalic.style.display = 'none';
}

if (typeof me.care_plan.workday.morning != 'undefined'){ 
//workday morning [0]
document.getElementById('wmorning').style.display = 'inline'
document.getElementById('div-0').style.display = 'inline'
document.getElementById('prod-0').innerHTML = me.care_plan.workday.morning[0].dose_title;
document.getElementById('prod-0').href = me.care_plan.workday.morning[0].product_link;
document.getElementById('use-0').innerHTML = me.care_plan.workday.morning[0].usage_instructions;
if(me.care_plan.workday.morning[0].thc_cbd_type == "high_cbd_type" || me.care_plan.workday.morning[0].thc_cbd_type == "one_one_type"){
document.getElementById('warn-0').style.display = 'inline';
}
document.getElementById('img-0').src = me.care_plan.workday.morning[0].category_image_url;

if(typeof me.care_plan.workday.morning[1] != 'undefined'){ 
//workday morning [1]
document.getElementById('div-1').style.display = 'inline'
document.getElementById('prod-1').innerHTML = me.care_plan.workday.morning[1].dose_title;
document.getElementById('prod-1').href = me.care_plan.workday.morning[1].product_link;
document.getElementById('use-1').innerHTML = me.care_plan.workday.morning[1].usage_instructions;
if(me.care_plan.workday.morning[1].thc_cbd_type == "high_cbd_type" || me.care_plan.workday.morning[1].thc_cbd_type == "one_one_type"){
document.getElementById('warn-1').style.display = 'inline';
}
document.getElementById('img-1').src = me.care_plan.workday.morning[1].category_image_url;
}
}

if (typeof me.care_plan.workday.afternoon != 'undefined'){ 
//workday afternoon [0]
document.getElementById('wafternoon').style.display = 'inline'
document.getElementById('div-2').style.display = 'inline'
document.getElementById('prod-2').innerHTML = me.care_plan.workday.afternoon[0].dose_title;
document.getElementById('prod-2').href = me.care_plan.workday.afternoon[0].product_link;
document.getElementById('use-2').innerHTML = me.care_plan.workday.afternoon[0].usage_instructions;
if(me.care_plan.workday.afternoon[0].thc_cbd_type == "high_cbd_type" || me.care_plan.workday.afternoon[0].thc_cbd_type == "one_one_type"){
document.getElementById('warn-2').style.display = 'inline';
}
document.getElementById('img-2').src = me.care_plan.workday.afternoon[0].category_image_url;

if(typeof me.care_plan.workday.afternoon[1] != 'undefined'){ 
//workday afternoon [1]
document.getElementById('div-3').style.display = 'inline'
document.getElementById('prod-3').innerHTML = me.care_plan.workday.afternoon[1].dose_title;
document.getElementById('prod-3').href = me.care_plan.workday.afternoon[1].product_link;
document.getElementById('use-3').innerHTML = me.care_plan.workday.afternoon[1].usage_instructions;
if(me.care_plan.workday.afternoon[1].thc_cbd_type == "high_cbd_type" || me.care_plan.workday.afternoon[1].thc_cbd_type == "one_one_type"){
document.getElementById('warn-3').style.display = 'inline';
}
document.getElementById('img-3').src = me.care_plan.workday.afternoon[1].category_image_url;
}
}

if (typeof me.care_plan.workday.evening != 'undefined'){ 
//workday evening [0]
document.getElementById('wevening').style.display = 'inline'
document.getElementById('div-4').style.display = 'inline'
document.getElementById('prod-4').innerHTML = me.care_plan.workday.evening[0].dose_title;
document.getElementById('prod-4').href = me.care_plan.workday.evening[0].product_link;
document.getElementById('use-4').innerHTML = me.care_plan.workday.evening[0].usage_instructions;
if(me.care_plan.workday.evening[0].thc_cbd_type == "high_cbd_type" || me.care_plan.workday.evening[0].thc_cbd_type == "one_one_type"){
document.getElementById('warn-4').style.display = 'inline';
}
document.getElementById('img-4').src = me.care_plan.workday.evening[0].category_image_url;

if(typeof me.care_plan.workday.evening[1] != 'undefined'){ 
//workday evening [1]
document.getElementById('div-5').style.display = 'inline'
document.getElementById('prod-5').innerHTML = me.care_plan.workday.evening[1].dose_title;
document.getElementById('prod-5').href = me.care_plan.workday.evening[1].product_link;
document.getElementById('use-5').innerHTML = me.care_plan.workday.evening[1].usage_instructions;
if(me.care_plan.workday.evening[1].thc_cbd_type == "high_cbd_type" || me.care_plan.workday.evening[1].thc_cbd_type == "one_one_type"){
document.getElementById('warn-5').style.display = 'inline';
}
document.getElementById('img-5').src = me.care_plan.workday.evening[1].category_image_url;
}
}

if(typeof me.care_plan.workday.bedtime != 'undefined'){ 
//workday bedtime [0]
document.getElementById('div-6').style.display = 'inline'
document.getElementById('wbedtime').style.display = 'inline'
document.getElementById('prod-6').innerHTML = me.care_plan.workday.bedtime[0].dose_title;
document.getElementById('prod-6').href = me.care_plan.workday.bedtime[0].product_link;
document.getElementById('use-6').innerHTML = me.care_plan.workday.bedtime[0].usage_instructions;
if(me.care_plan.workday.bedtime[0].thc_cbd_type == "high_cbd_type" || me.care_plan.workday.bedtime[0].thc_cbd_type == "one_one_type"){
document.getElementById('warn-6').style.display = 'inline';
}
document.getElementById('img-6').src = me.care_plan.workday.bedtime[0].category_image_url;

if(typeof me.care_plan.workday.bedtime[1] != 'undefined'){ 
//workday bedtime [1]
document.getElementById('div-7').style.display = 'inline'
document.getElementById('prod-7').innerHTML = me.care_plan.workday.bedtime[1].dose_title;
document.getElementById('prod-7').href = me.care_plan.workday.bedtime[1].product_link;
document.getElementById('use-7').innerHTML = me.care_plan.workday.bedtime[1].usage_instructions;
if(me.care_plan.workday.bedtime[1].thc_cbd_type == "high_cbd_type" || me.care_plan.workday.bedtime[1].thc_cbd_type == "one_one_type"){
document.getElementById('warn-7').style.display = 'inline';
}
document.getElementById('img-7').src = me.care_plan.workday.bedtime[1].category_image_url;
}
}

if(typeof me.care_plan.non_workday.morning != 'undefined'){ 
//non workday morning [0]
document.getElementById('div-8').style.display = 'inline'
document.getElementById('nwmorning').style.display = 'inline'
document.getElementById('prod-8').innerHTML = me.care_plan.non_workday.morning[0].dose_title;
document.getElementById('prod-8').href = me.care_plan.non_workday.morning[0].product_link;
document.getElementById('use-8').innerHTML = me.care_plan.non_workday.morning[0].usage_instructions;
if(me.care_plan.non_workday.morning[0].thc_cbd_type == "high_cbd_type" || me.care_plan.non_workday.morning[0].thc_cbd_type == "one_one_type"){
document.getElementById('warn-8').style.display = 'inline';
}
document.getElementById('img-8').src = me.care_plan.non_workday.morning[0].category_image_url;
if(typeof me.care_plan.non_workday.morning[1] != 'undefined'){ 
//non workday morning [1]
document.getElementById('div-9').style.display = 'inline'
document.getElementById('prod-9').innerHTML = me.care_plan.non_workday.morning[1].dose_title;
document.getElementById('prod-9').href = me.care_plan.non_workday.morning[1].product_link;
document.getElementById('use-9').innerHTML = me.care_plan.non_workday.morning[1].usage_instructions;
if(me.care_plan.non_workday.morning[1].thc_cbd_type == "high_cbd_type" || me.care_plan.non_workday.morning[1].thc_cbd_type == "one_one_type"){
document.getElementById('warn-9').style.display = 'inline';
}
document.getElementById('img-9').src = me.care_plan.non_workday.morning[1].category_image_url;
}
}

if(typeof me.care_plan.non_workday.afternoon != 'undefined'){ 
//non workday afternoon [0]
document.getElementById('div-10').style.display = 'inline'
document.getElementById('nwafternoon').style.display = 'inline'
document.getElementById('prod-10').innerHTML = me.care_plan.non_workday.afternoon[0].dose_title;
document.getElementById('prod-10').href = me.care_plan.non_workday.afternoon[0].product_link;
document.getElementById('use-10').innerHTML = me.care_plan.non_workday.afternoon[0].usage_instructions;
if(me.care_plan.non_workday.afternoon[0].thc_cbd_type == "high_cbd_type" || me.care_plan.non_workday.afternoon[0].thc_cbd_type == "one_one_type"){
document.getElementById('warn-10').style.display = 'inline';
}
document.getElementById('img-10').src = me.care_plan.non_workday.afternoon[0].category_image_url;

if(typeof me.care_plan.non_workday.afternoon[1] != 'undefined'){ 
//non workday afternoon [1]
document.getElementById('div-11').style.display = 'inline'
document.getElementById('prod-11').innerHTML = me.care_plan.non_workday.afternoon[1].dose_title;
document.getElementById('prod-11').href = me.care_plan.non_workday.afternoon[1].product_link;
document.getElementById('use-11').innerHTML = me.care_plan.non_workday.afternoon[1].usage_instructions;
if(me.care_plan.non_workday.afternoon[1].thc_cbd_type == "high_cbd_type" || me.care_plan.non_workday.afternoon[1].thc_cbd_type == "one_one_type"){
document.getElementById('warn-11').style.display = 'inline';
}
document.getElementById('img-11').src = me.care_plan.non_workday.afternoon[1].category_image_url;
}
}


if(typeof me.care_plan.non_workday.evening != 'undefined'){ 
//non workday evening [0]
document.getElementById('div-12').style.display = 'inline'
document.getElementById('nwevening').style.display = 'inline'
document.getElementById('prod-12').innerHTML = me.care_plan.non_workday.evening[0].dose_title;
document.getElementById('prod-12').href = me.care_plan.non_workday.evening[0].product_link;
document.getElementById('use-12').innerHTML = me.care_plan.non_workday.evening[0].usage_instructions;
if(me.care_plan.non_workday.evening[0].thc_cbd_type == "high_cbd_type" || me.care_plan.non_workday.evening[0].thc_cbd_type == "one_one_type"){
document.getElementById('warn-12').style.display = 'inline';
}
document.getElementById('img-12').src = me.care_plan.non_workday.evening[0].category_image_url;

if(typeof me.care_plan.non_workday.evening[1] != 'undefined'){ 
//non workday evening [1]
document.getElementById('div-13').style.display = 'inline'
document.getElementById('prod-13').innerHTML = me.care_plan.non_workday.evening[1].dose_title;
document.getElementById('prod-13').href = me.care_plan.non_workday.evening[1].product_link;
document.getElementById('use-13').innerHTML = me.care_plan.non_workday.evening[1].usage_instructions;
if(me.care_plan.non_workday.evening[1].thc_cbd_type == "high_cbd_type" || me.care_plan.non_workday.evening[1].thc_cbd_type == "one_one_type"){
document.getElementById('warn-13').style.display = 'inline';
}
document.getElementById('img-13').src = me.care_plan.non_workday.evening[1].category_image_url;
}
}

if(typeof me.care_plan.non_workday.bedtime != 'undefined'){ 
//non workday bedtime [0]
document.getElementById('div-14').style.display = 'inline'
document.getElementById('nwbedtime').style.display = 'inline'
document.getElementById('prod-14').innerHTML = me.care_plan.non_workday.bedtime[0].dose_title;
document.getElementById('prod-14').href = me.care_plan.non_workday.bedtime[0].product_link;
document.getElementById('use-14').innerHTML = me.care_plan.non_workday.bedtime[0].usage_instructions;
if(me.care_plan.non_workday.bedtime[0].thc_cbd_type == "high_cbd_type" || me.care_plan.non_workday.bedtime[0].thc_cbd_type == "one_one_type"){
document.getElementById('warn-14').style.display = 'inline';
}
document.getElementById('img-14').src = me.care_plan.non_workday.bedtime[0].category_image_url;
if(typeof me.care_plan.non_workday.bedtime[1] != 'undefined'){ 
//non workday bedtime [1]
document.getElementById('div-15').style.display = 'inline'
document.getElementById('prod-15').innerHTML = me.care_plan.non_workday.bedtime[1].dose_title;
document.getElementById('prod-15').href = me.care_plan.non_workday.bedtime[1].product_link;
document.getElementById('use-15').innerHTML = me.care_plan.non_workday.bedtime[1].usage_instructions;
if(me.care_plan.non_workday.bedtime[1].thc_cbd_type == "high_cbd_type" || me.care_plan.non_workday.bedtime[1].thc_cbd_type == "one_one_type"){
document.getElementById('warn-15').style.display = 'inline';
}
document.getElementById('img-15').src = me.care_plan.non_workday.bedtime[1].category_image_url;
}
}

}
