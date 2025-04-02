import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      firstName: 'Andrew',
      lastName: 'McNulty',
      mobileNumber: '+1-224-463-7589',
      nickName: 'jford',
      gender: 'Male',
      email: 'a*@gmail.com',
      jointNames: '',
      username: 'sample1',
      password: 'sample1'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 115678.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '237832w2762',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'June 10 2024, 3:32:32 am',
        description: "Grimms supply holding's",
        status: 'Success',
        amount_usd: 58000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'April 15 2023, 1:04:02 pm',
        description: 'Transfer from TABITHA MARTEL',
        status: 'Success',
        amount_usd: 250000.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'February 8 2022, 10:11:22 am',
        description: 'Transfer from NICHOLAS DUKE',
        status: 'Success',
        amount_usd: 650000.0,
        account_no: '****3839'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'July 2 2021, 7:08:32 am',
        description: 'Transfer from BRANDON PERKINS',
        status: 'Success',
        amount_usd: 175000.0,
        account_no: '****3249'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'November 23 2020, 1:15:02 pm',
        description: "Sinlair's Store - Trx",
        status: 'Success',
        amount_usd: -650.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN011',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN012',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN013',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN014',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN015',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN016',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN017',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      firstName: 'Anna iemma',
      lastName: '',
      mobileNumber: '+1-***-***-****',
      email: 'annaiemma25@outlook.com',
      createdOn: '1/24/2025', // m/d/y
      username: 'Ggiemma2025',
      password: 'GGiemma2024'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 27070.00
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '252118',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'January 27, 2025',
        description: 'Credit from investment',
        status: 'Pending',
        amount_usd: 27036000.0
      },
      {
        dateTime: 'January 24, 2025',
        description: 'Account Open',
        status: 'Success',
        amount_usd: 27070.0
      }
    ]
  },
  {
    account_id: 'ACC003',
    holder: {
      firstName: 'Cecilia Crump',
      lastName: '',
      mobileNumber: '***-***-****',
      email: 'c@gmail.com',
      createdOn: '4/1/2025', // m/d/y
      username: 'Cecilia_Crump',
      password: 'Fashionwoman4You'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 455221.07
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237589',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'July 9, 2025',
        description: 'Inheritance Investment - XXXXXX3637',
        status: 'Pending',
        amount_usd: 765000.0
      },
      {
        dateTime: 'April 4, 2025',
        description: 'Contract: Payment from Knight Transportation - XXXXXX8490',
        status: 'Success',
        amount_usd: 455000.0
      },
      {
        dateTime: 'March 19, 2025',
        description: 'Debit: Uber - XXXXXX1383',
        status: 'Success',
        amount_usd: -17.0
      },
      {
        dateTime: 'March 17, 2025',
        description: 'Debit: Restaurant - XXXXXX3874',
        status: 'Success',
        amount_usd: -32.0
      },
      {
        dateTime: 'February 1, 2025',
        description: 'Check Deposit - XXXXXX0847',
        status: 'Success',
        amount_usd: 1252.50
      },
      {
        dateTime: 'December 29, 2024',
        description: 'Walmart - XXXXXX0047',
        status: 'Success',
        amount_usd: -965.00
      },
      {
        dateTime: 'December 17, 2024',
        description: 'Withdrawal - XXXXXX9646',
        status: 'Success',
        amount_usd: -5000.00
      },
      {
        dateTime: 'December 15, 2024',
        description: 'Credit from Investment - XXXXXX4578',
        status: 'Success',
        amount_usd: 10000.00
      },
      {
        dateTime: 'December 13, 2022',
        description: 'Account Open - XXXXXX2634',
        status: 'Success',
        amount_usd: 500.00
      },
    ]
  }
];
