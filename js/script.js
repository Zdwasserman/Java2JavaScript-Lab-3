" use strict ";
var display = document.getElementById("display");

var phonebook = new PhoneBook();
function PhoneBook()
{
  this.pbook = [];
};

function Contacts(name, number)
{
  this.name = name;
  this.number = number;
}
function listAllNames()
{
  var output = "";
  for(var i = 0; i < phonebook.pbook.length; i++)
  {
    output += phonebook.pbook[i].name + "<br/ >";
  }
  display.innerHTML = output;
};

function listAllNumbers()
{
  var output = "";
  for(var i = 0; i < phonebook.pbook.length; i++)
  {
    output += phonebook.pbook[i].number + "<br/ >";
  }
  display.innerHTML = output;

};

function showAdd()
 {
  var name = prompt("Enter full name");
  var number = prompt("Enter phone number");
  phonebook.pbook.push(new Contacts(name, number));
  display.innerHTML = phonebook.pbook.length;
};

function showRemove()
{
  var remove = prompt("Enter name to remove");
  for(var i = 0; i < phonebook.pbook.length; i++)
  {
    if(phonebook.pbook[i].name == remove)
    {
      phonebook.pbook.splice(i,1);
      display.innerHTML = "contact deleted";
    }
    else{
      display.innerHTML = "no match";
    }
  }
};

function showLookup() {
  var lookup = prompt("Enter number to lookup");
  for(var i = 0; i < phonebook.pbook.length; i++){
    if(phonebook.pbook[i].name == lookup){
      display.innerHTML = phonebook.pbook[i].number;
    }
    else{
      display.innerHTML = "no match";
    }
  }
};
