const express = require("express");
const router = express.Router();
const axios = require("axios");
const cors = require("cors");
const http = require("http");


class Node { 
    constructor(element) { 
        this.element = element; 
        this.next = null
    } 
} 
class LinkedList { 
    constructor() { 
        this.head = null; 
        this.size = 0; 
    } 

    add(element) {  //Inserting elements O(1)
        // creates a new node 
        var node = new Node(element); 
        var current; 
        // if list is Empty add the element and make it head 
        if (this.head == null) 
            this.head = node; 
        else { 
            current = this.head; 
       // iterate to the end of the list
            while (current.next) { 
                current = current.next; 
            }
            current.next = node; 
        } 
        this.size++; 
    } 
}
var result = new LinkedList(); //storing a data in the linked list

//inserting elements complexity O(1)
router.post("/", cors(), (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    var hit=0;
    var bio=0;
    var it=result.head;
   while (1) {
        if(result.size!=0){
            if((it.element.name.toLowerCase()==req.body.name.toLowerCase() && it.element.surname.toLowerCase()==req.body.surname.toLowerCase()) || req.body.name === "" || req.body.surname === "" ) { // check for duplicates and empty imputs
                hit=1;
                bio=1;
            }
            else  hit=0;
        }
       if(it==null) break;
        it=it.next;
        if(it==null) break;
    }
   if(hit==0 && bio==0 && req.body.name != "" && req.body.surname != ""){
      result.add(req.body); //inserting objects
      res.status(200);
      res.send("Successfully added");
    }
  else res.send("Duplicates and empty inputs are not allowed");
  });

router.get("/", cors(), (req, res) => {
  res.status(200);
  res.send(result);
});


router.get("/:", cors(), (req, res) => {
    if(result.size==0) res.send("No employees. You have to add a new employee");
    else if(result.size==1) res.send("Just one employee. You have to add a new employee");
    else{
        var it=result.head; 
        var br=0,x;
        let str= ' ';
        var pok=result.head;
        var indeks,k,vel=result.size; 
        var first = [], second= []
        for(var i=0; i<vel*2; i++){
            indeks= Math.floor(Math.random()*result.size); 
            if(br%2==0){
                for(var  j=0; j<=first.length; j++) {
                    while(first[j]==indeks) {
                        indeks= Math.floor(Math.random()*result.size);  
                        j=0;
                    }  
                }
                x=indeks;
                first.push(indeks);
            }
            else if(br%2!=0) {
                for(var  p=0; p<=second.length; p++) {
                    while(second[p]==indeks || indeks==x) {
                        indeks= Math.floor(Math.random()*result.size);  
                        p=0;
                    }  
                }
                second.push(indeks);
            }
            k=0;
            pok=result.head;
            while(k<indeks){
                pok=pok.next;
                k++;
                if(k==indeks) break;
            }
            str+=pok.element.name + " " + pok.element.surname;
            if(br%2==0) str+="->"; else str+='\xa0\xa0\xa0\xa0\xa0\xa0\xa0';
            br++;
        }
    res.send(str); 
    }
});



module.exports = router;