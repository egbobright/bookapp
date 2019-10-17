import { Book } from './Book.js';
let book1=new Book('How To Read And Why','Harold Bloom',300,'Abook about reaaing',4,false);
let book2=new Book('3:16 The Numbers of Hope','Max Lucado', 140, 'A book about Jesus',5,true);
let book3=new Book('Things Fall Apart', 'Chinua Achebe',140,'A book about the Biafran War and Nigeria',0,true);
let book4=new Book('There Was A Country', 'Chinua Achebe', 300,'A book about the Biafran War and Nigeria',5,true);
let book5=new Book('A Rhetoric Of Argument','Bright Egbo',200,'I have learnt',6,false);

const bookList=[book1,book2,book3,book4,book5];
export { bookList };
