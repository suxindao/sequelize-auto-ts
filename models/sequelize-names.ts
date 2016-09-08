////////////////////////////////////////////////////////////////////
//
// GENERATED CLASS
//
// DO NOT EDIT
//
// See sequelize-auto-ts for edits
//
////////////////////////////////////////////////////////////////////

'depends typescript-client-server-compat.js';

import types = require('./sequelize-types');

export interface SequelizeNames {
    TableNames: TableNames;
    calculatedFields:CalculatedFields;
    references:References;
    adminFields:AdminFields;
    areaFields:AreaFields;
    boardFields:BoardFields;
    board_groupFields:BoardGroupFields;
    board_group_feeFields:BoardGroupFeeFields;
    componentFields:ComponentFields;
    customFields:CustomFields;
    dealerFields:DealerFields;
    mallFields:MallFields;
    orderFields:OrderFields;
    order_detailFields:OrderDetailFields;
    programFields:ProgramFields;
    publish_historyFields:PublishHistoryFields;
    publish_inFields:PublishInFields;
}

export class TableNames {
    admin:string = 'admin';
    area:string = 'area';
    board:string = 'board';
    board_group:string = 'board_group';
    board_group_fee:string = 'board_group_fee';
    component:string = 'component';
    custom:string = 'custom';
    dealer:string = 'dealer';
    mall:string = 'mall';
    order:string = 'order';
    order_detail:string = 'order_detail';
    program:string = 'program';
    publish_history:string = 'publish_history';
    publish_in:string = 'publish_in';
}
export var tableNames:TableNames = new TableNames();

export class AdminFields {
    id:string = 'id';
    name:string = 'name';
    password:string = 'password';
    create_date:string = 'create_date';
    update_date:string = 'update_date';
    admin:string = 'admin';
}
export var adminFields:AdminFields = new AdminFields();


export class AreaFields {
    id:string = 'id';
    did:string = 'did';
    name:string = 'name';
}
export var areaFields:AreaFields = new AreaFields();


export class BoardFields {
    id:string = 'id';
    did:string = 'did';
    name:string = 'name';
    aid:string = 'aid';
    gid:string = 'gid';
}
export var boardFields:BoardFields = new BoardFields();


export class BoardGroupFields {
    id:string = 'id';
    did:string = 'did';
    name:string = 'name';
}
export var boardGroupFields:BoardGroupFields = new BoardGroupFields();


export class BoardGroupFeeFields {
    id:string = 'id';
    bid:string = 'bid';
    start_hour:string = 'start_hour';
    end_hour:string = 'end_hour';
    fee:string = 'fee';
}
export var boardGroupFeeFields:BoardGroupFeeFields = new BoardGroupFeeFields();


export class ComponentFields {
    name:string = 'name';
    body:string = 'body';
    createtime:string = 'createtime';
    expires_in:string = 'expires_in';
}
export var componentFields:ComponentFields = new ComponentFields();


export class CustomFields {
    id:string = 'id';
    did:string = 'did';
    name:string = 'name';
    mobile:string = 'mobile';
    active:string = 'active';
    create_date:string = 'create_date';
    update_date:string = 'update_date';
    sms_code:string = 'sms_code';
    sms_date:string = 'sms_date';
    token:string = 'token';
    token_date:string = 'token_date';
}
export var customFields:CustomFields = new CustomFields();


export class DealerFields {
    id:string = 'id';
    name:string = 'name';
    mobile:string = 'mobile';
    active:string = 'active';
    password:string = 'password';
    create_date:string = 'create_date';
    update_date:string = 'update_date';
    admin:string = 'admin';
}
export var dealerFields:DealerFields = new DealerFields();


export class MallFields {
    id:string = 'id';
    did:string = 'did';
    name:string = 'name';
    create_date:string = 'create_date';
    update_date:string = 'update_date';
    appid:string = 'appid';
    access_token:string = 'access_token';
    access_token_expires:string = 'access_token_expires';
    access_token_time:string = 'access_token_time';
    access_refresh_token:string = 'access_refresh_token';
    auth:string = 'auth';
    auth_time:string = 'auth_time';
    unauth_time:string = 'unauth_time';
    nick_name:string = 'nick_name';
    head_img:string = 'head_img';
    user_name:string = 'user_name';
    alias:string = 'alias';
    qrcode_url:string = 'qrcode_url';
    func:string = 'func';
    :string = '';
}
export var mallFields:MallFields = new MallFields();


export class OrderFields {
    id:string = 'id';
    did:string = 'did';
    cid:string = 'cid';
    create_time:string = 'create_time';
    fee:string = 'fee';
    type:string = 'type';
}
export var orderFields:OrderFields = new OrderFields();


export class OrderDetailFields {
    id:string = 'id';
    oid:string = 'oid';
    player_id:string = 'player_id';
    start_date:string = 'start_date';
    end_date:string = 'end_date';
    start_hour:string = 'start_hour';
    end_hour:string = 'end_hour';
    fee:string = 'fee';
    type:string = 'type';
}
export var orderDetailFields:OrderDetailFields = new OrderDetailFields();


export class ProgramFields {
    id:string = 'id';
    did:string = 'did';
    cid:string = 'cid';
    code:string = 'code';
    name:string = 'name';
    resolution:string = 'resolution';
    bgmusic:string = 'bgmusic';
    preview_image:string = 'preview_image';
    update_date:string = 'update_date';
    first_image:string = 'first_image';
    size:string = 'size';
    auth:string = 'auth';
    material:string = 'material';
}
export var programFields:ProgramFields = new ProgramFields();


export class PublishHistoryFields {
    id:string = 'id';
    code:string = 'code';
    did:string = 'did';
    cid:string = 'cid';
    program:string = 'program';
    name:string = 'name';
    start_date:string = 'start_date';
    expired_date:string = 'expired_date';
    timing_date:string = 'timing_date';
    publish_date:string = 'publish_date';
    create_date:string = 'create_date';
    schedule:string = 'schedule';
    urgency:string = 'urgency';
    engross:string = 'engross';
    type:string = 'type';
}
export var publishHistoryFields:PublishHistoryFields = new PublishHistoryFields();


export class PublishInFields {
    id:string = 'id';
    task_id:string = 'task_id';
    player_id:string = 'player_id';
    publish_id:string = 'publish_id';
    publish_code:string = 'publish_code';
    program_id:string = 'program_id';
    program_name:string = 'program_name';
    status:string = 'status';
    expiration_time:string = 'expiration_time';
    create_time:string = 'create_time';
    accept_time:string = 'accept_time';
    finish_time:string = 'finish_time';
    delete_time:string = 'delete_time';
    publish_time:string = 'publish_time';
    publish_type:string = 'publish_type';
}
export var publishInFields:PublishInFields = new PublishInFields();


export class CalculatedFields {}
export var calculatedFields:CalculatedFields = new CalculatedFields();

export class References {
    did:types.Reference = { tableName: 'dealer', primaryKey: 'dealerId', foreignKey: 'did', as: undefined};
}

export var references:References = new References();
