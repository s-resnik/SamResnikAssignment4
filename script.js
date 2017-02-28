var Main = {}

Main.Book = function(name, author, rating)
{
	this.Name = name;
	this.Author = author;
	this.Rating = rating;
}

Main.Book.prototype.GetBookInfo = function()
{
	Return "Book: " + this.Name + " Author: " + this.Author + " Rating: " + this.Rating;
}

Main.Book.prototype.ChangeRating = funtion(rate)
{
	this.Rating = rate;
}

Main.Book.prototype.GetBookInfo = function()
{
	Return "Book: " + this.Name + " Author: " + this.Author + " Rating: " + this.Rating;
}

Main.Helix = new Main.Book("Helix", "Brown", 7);
Main.Eragon = new Main.Book("Eragon", "Paolini", 8);
Main.Silmarillion = new Main.Book("Silmarillion", "Tolkien", 8);

Main.Eragon.ChangeRating(9);

document.write(Main.Helix.GetBookInfo);