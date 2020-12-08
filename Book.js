class Book{
  constructor(title,author,pages,description,currentPage,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.description=description;
    this.currentPage=currentPage;
    let currentPage=1;
    this.read=read;
  }
  readBook(pageNumber){
    if(pageNumber<0){
      alert('Please select a valid Page');
      this.read=false;
    }else if(pageNumber>0){
             this.currentPage=pageNumber;
             this.read=false;
             }else{
           this.read=true;
    }
  }
}

export { Book };
