function Contact(name, email, phone, address, profileImage) //A Contact has the following: Name, Email, Phone, Address, Profile Image
{
	this.name = name;
	this.email = email;
	this.phone = phone;
	this.address = address;
	this.profileImage = profileImage;
	return this;

}                     

function User(username, password)     //User constructor
{
	this.username = username;
	this.password = password;
	this.listOfContacts = [];
	User.entry = false;    //The default status of the login of the the user to his list of contacts is set to false
	return this;     
}



User.prototype.login = function(username, password)   //login method
{
	if(username == this.username &&  password == this.password)
	{
		this.entry = true; 
		console.log("Welcome " + this.username);
	}
	else
	{
		this.entry = false;
		console.log("Incorrect username or password. Please try again");

	}

}

User.prototype.add = function(name, email, phone, address, profileImage)   //add method
{
	if(this.entry == true)
	{
 		var contact = new Contact(name, email, phone, address, profileImage);
		this.listOfContacts.push(contact);
		console.log(contact.name + " has been adde to your contacts");
	}
	
	else console.log("You are not logged in");

}

User.prototype.list = function()    //list method
{
	if(this.entry == true)
	{
		for(var i = 0; i< this.listOfContacts.length; i++)
		{
			console.log(this.listOfContacts[i]);
		}
		
	}

	else console.log("You are not logged in");

}

User.prototype.edit = function(contact)    //edit method
{
	if(this.entry == true)
	{
	var index = listOfContacts.indexOf(contact);
	this.listOfContacts[index].name = contact.name; 
	this.listOfContacts[index].email = contact.email; 
	this.listOfContacts[index].phone = contact.phone; 
	this.listOfContacts[index].address = contact.address; 
	this.listOfContacts[index].profileImage = contact.profileImage;
	conosle.log("Changes made to " + contact.name + " have been saved");
	}


	else console.log("You are not logged in");

}


User.prototype.delete = function(contact)     //delete method
{
	if(this.entry == true)
	{
		var index = listOfContacts.indexOf(contact);
		this.listOfContacts.splice(index,1);
		console.log(contact.name + " has been deleted from your contacts");
	}

	else console.log("You are not logged in");
}