export class Petsitter {
  constructor(
    public first_name: string = "",
    public last_name: string = "" ,
    public email: string = "",
    public pet_name: string = "",
    public pet_type: string = "",
    public start_date: Date = new Date(),
    public end_date: Date = new Date(),
    public notes: string = ""
  ){}

}
