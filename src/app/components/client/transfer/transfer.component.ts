// transfer.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TransferService } from 'src/app/Service/transfer.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  transferForm: FormGroup;
  reciever!: string;  // Non-null assertion operator used here

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private transferService: TransferService
  ) {
    this.transferForm = this.fb.group({
      reciever: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.reciever = params['reciever'] || '';
      if (this.reciever) {
        this.transferForm.patchValue({ reciever: this.reciever });
      }
    });
  }

  onSubmit(): void {
    if (this.transferForm.valid) {
      const { amount, reciever } = this.transferForm.value;
      const senderId = '000'; // Replace with the actual senderId

      this.transferService.transfer(amount, senderId , reciever).subscribe(
        (        response: any) => {
          console.log('Transfer successful', response);
        },
        (        error: any) => {
          console.error('Transfer failed', error);
        }
      );
    }
  }
}
