var GAHPrimary = {
    name: "Julia",
    age: 32,
    ability: "intermediate",
    education: ["Avy 1", "Companion Rescue", "Avy Refresh"],
    partners: [
       {
           name: "Donovan",
           age: 34,
           ability: "expert",
           education: ["Avy 1", "Companion Rescue", "Avy Refresh"],
           priorGuest: {
                year: 2016,
                lodge: "Vista"
           }
       }, {
           name: "Mandy",
           age: 42,
           ability: "beginner",
           education: ["Avy 1"]
       }, {
            name: "John",
            age: 38,
            ability: "expert",
            education: ["Avy 1", "Avy 2", "Companion Rescue"]  
       }, {
            name: "Ally",
            age: 30,
            ability: "intermediate",
            education: []  
       }, {
            name: "Jeff",
            age: 27,
            ability: "expert",
            education: []  
       }, {
            name: "Nik",
            age: 43,
            ability: "intermediate",
            education: ["Avy 1"] 
       }, {
            name: "Anne",
            age: 40,
            ability: "expert",
            education: ["Avy 1", "Avy 2"],
            priorGuest: {
                 year: 2012,
                 lodge: "Meadows"
            }
       }
    ],
    addPartner: function(newPartner){
          this.partners.push(newPartner);
    }
};
GAHPrimary.addPartner({
     name: "Eric",
     age: 38,
     ability: "expert",
     education: ["Avy 1", "Avy 2"]
});
console.log(GAHPrimary)