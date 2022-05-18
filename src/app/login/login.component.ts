import { Component, OnInit } from '@angular/core';
import { OldLogService } from '../service/old-log.service';
import { NewLogService } from '../service/new-log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private oldLogService: OldLogService,
              private newLogService: NewLogService) { }
  userName: string = "";
  ngOnInit() {
    
  }

  public onClick(myInputValue: any) {
    // this.oldLogService.Info("old");
    // this.newLogService.Info("new");
    // console.log(this.oldLogService.id);
    // console.log(this.newLogService.id);

    
  }

}
