function myDictionary() {       //Dictionary
    var VoldemortInfo = {       
        Name: "Tom Riddle",     
        Occupation: "Dark Lord",
        House: "Slytherin",
        Age: "Unknown",
        Occupation: "Horcruxer" //For testing duplicate keys
        
    };
    delete VoldemortInfo.Occupation;   //To delete Key-value pair to display undefined
    document.getElementById("Dictionary").innerHTML = VoldemortInfo.Name +" "+ VoldemortInfo.Occupation; //Two outputs to show it working and an undefined result
}