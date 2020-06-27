import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserDTO } from 'src/app/model/dto/user-dto';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  dto: UserDTO;
  userKey: string;
  userNotFound: boolean = true;

  constructor(private route: ActivatedRoute, private service: UserService) {
    this.route.params.subscribe(params => console.log("PARAMS: " + params));
  }

  ngOnInit(): void {
  }

}
