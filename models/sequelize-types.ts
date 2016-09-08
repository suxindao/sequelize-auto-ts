////////////////////////////////////////////////////////////////////
//
// GENERATED CLASS
//
// DO NOT EDIT
//
// See sequelize-auto-ts for edits
//
////////////////////////////////////////////////////////////////////

/// <reference path="../typings/index.d.ts" />

import sequelize = require('sequelize');
import types = require('./sequelize-types'); // important so we can use same fully qualified names in all generated files


var asserters:{[typeName:string]:(pojo:any, allowUndefined?:boolean) => void} = {};

//////////////////////////////////////////////////////////////////////////////
//
//
//               admin
//
//
//////////////////////////////////////////////////////////////////////////////


export interface AdminPojo
{
    id?:number;
    name?:string;
    password?:string;
    create_date?:Date;
    update_date?:Date;
    admin?:string;
}

export interface AdminInstance extends sequelize.Instance<AdminPojo>, AdminPojo { }

export interface AdminModel extends sequelize.Model<AdminInstance, AdminPojo> { }

export function AssertValidAdmin(pojo:AdminPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid admin provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid admin provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'id': assertValidFieldType('admin', 'id', pojo, 'number'); break;
            case 'name': assertValidFieldType('admin', 'name', pojo, 'string'); break;
            case 'password': assertValidFieldType('admin', 'password', pojo, 'string'); break;
            case 'create_date': assertValidFieldType('admin', 'create_date', pojo, 'Date'); break;
            case 'update_date': assertValidFieldType('admin', 'update_date', pojo, 'Date'); break;
            case 'admin': assertValidFieldType('admin', 'admin', pojo, 'string'); break;
            default:
                throw new Error('Invalid admin provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['admin'] = AssertValidAdmin;





//////////////////////////////////////////////////////////////////////////////
//
//
//               area
//
//
//////////////////////////////////////////////////////////////////////////////


export interface AreaPojo
{
    id?:number;
    did?:number;
    name?:string;
}

export interface AreaInstance extends sequelize.Instance<AreaPojo>, AreaPojo { }

export interface AreaModel extends sequelize.Model<AreaInstance, AreaPojo> { }

export function AssertValidArea(pojo:AreaPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid area provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid area provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'id': assertValidFieldType('area', 'id', pojo, 'number'); break;
            case 'did': assertValidFieldType('area', 'did', pojo, 'number'); break;
            case 'name': assertValidFieldType('area', 'name', pojo, 'string'); break;
            default:
                throw new Error('Invalid area provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['area'] = AssertValidArea;





//////////////////////////////////////////////////////////////////////////////
//
//
//               board
//
//
//////////////////////////////////////////////////////////////////////////////


export interface BoardPojo
{
    id?:number;
    did?:number;
    name?:string;
    aid?:number;
    gid?:number;
}

export interface BoardInstance extends sequelize.Instance<BoardPojo>, BoardPojo { }

export interface BoardModel extends sequelize.Model<BoardInstance, BoardPojo> { }

export function AssertValidBoard(pojo:BoardPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid board provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid board provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'id': assertValidFieldType('board', 'id', pojo, 'number'); break;
            case 'did': assertValidFieldType('board', 'did', pojo, 'number'); break;
            case 'name': assertValidFieldType('board', 'name', pojo, 'string'); break;
            case 'aid': assertValidFieldType('board', 'aid', pojo, 'number'); break;
            case 'gid': assertValidFieldType('board', 'gid', pojo, 'number'); break;
            default:
                throw new Error('Invalid board provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['board'] = AssertValidBoard;





//////////////////////////////////////////////////////////////////////////////
//
//
//               board_group
//
//
//////////////////////////////////////////////////////////////////////////////


export interface BoardGroupPojo
{
    id?:number;
    did?:number;
    name?:string;
}

export interface BoardGroupInstance extends sequelize.Instance<BoardGroupPojo>, BoardGroupPojo { }

export interface BoardGroupModel extends sequelize.Model<BoardGroupInstance, BoardGroupPojo> { }

export function AssertValidBoardGroup(pojo:BoardGroupPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid board_group provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid board_group provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'id': assertValidFieldType('board_group', 'id', pojo, 'number'); break;
            case 'did': assertValidFieldType('board_group', 'did', pojo, 'number'); break;
            case 'name': assertValidFieldType('board_group', 'name', pojo, 'string'); break;
            default:
                throw new Error('Invalid board_group provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['board_group'] = AssertValidBoardGroup;





//////////////////////////////////////////////////////////////////////////////
//
//
//               board_group_fee
//
//
//////////////////////////////////////////////////////////////////////////////


export interface BoardGroupFeePojo
{
    id?:number;
    bid?:number;
    start_hour?:number;
    end_hour?:number;
    fee?:number;
}

export interface BoardGroupFeeInstance extends sequelize.Instance<BoardGroupFeePojo>, BoardGroupFeePojo { }

export interface BoardGroupFeeModel extends sequelize.Model<BoardGroupFeeInstance, BoardGroupFeePojo> { }

export function AssertValidBoardGroupFee(pojo:BoardGroupFeePojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid board_group_fee provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid board_group_fee provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'id': assertValidFieldType('board_group_fee', 'id', pojo, 'number'); break;
            case 'bid': assertValidFieldType('board_group_fee', 'bid', pojo, 'number'); break;
            case 'start_hour': assertValidFieldType('board_group_fee', 'start_hour', pojo, 'number'); break;
            case 'end_hour': assertValidFieldType('board_group_fee', 'end_hour', pojo, 'number'); break;
            case 'fee': assertValidFieldType('board_group_fee', 'fee', pojo, 'number'); break;
            default:
                throw new Error('Invalid board_group_fee provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['board_group_fee'] = AssertValidBoardGroupFee;





//////////////////////////////////////////////////////////////////////////////
//
//
//               component
//
//
//////////////////////////////////////////////////////////////////////////////


export interface ComponentPojo
{
    name?:string;
    body?:string;
    createtime?:number;
    expires_in?:number;
}

export interface ComponentInstance extends sequelize.Instance<ComponentPojo>, ComponentPojo { }

export interface ComponentModel extends sequelize.Model<ComponentInstance, ComponentPojo> { }

export function AssertValidComponent(pojo:ComponentPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid component provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid component provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'name': assertValidFieldType('component', 'name', pojo, 'string'); break;
            case 'body': assertValidFieldType('component', 'body', pojo, 'string'); break;
            case 'createtime': assertValidFieldType('component', 'createtime', pojo, 'number'); break;
            case 'expires_in': assertValidFieldType('component', 'expires_in', pojo, 'number'); break;
            default:
                throw new Error('Invalid component provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['component'] = AssertValidComponent;





//////////////////////////////////////////////////////////////////////////////
//
//
//               custom
//
//
//////////////////////////////////////////////////////////////////////////////


export interface CustomPojo
{
    id?:number;
    did?:number;
    name?:string;
    mobile?:number;
    active?:boolean;
    create_date?:Date;
    update_date?:Date;
    sms_code?:number;
    sms_date?:Date;
    token?:string;
    token_date?:Date;
}

export interface CustomInstance extends sequelize.Instance<CustomPojo>, CustomPojo { }

export interface CustomModel extends sequelize.Model<CustomInstance, CustomPojo> { }

export function AssertValidCustom(pojo:CustomPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid custom provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid custom provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'id': assertValidFieldType('custom', 'id', pojo, 'number'); break;
            case 'did': assertValidFieldType('custom', 'did', pojo, 'number'); break;
            case 'name': assertValidFieldType('custom', 'name', pojo, 'string'); break;
            case 'mobile': assertValidFieldType('custom', 'mobile', pojo, 'number'); break;
            case 'active': assertValidFieldType('custom', 'active', pojo, 'boolean'); break;
            case 'create_date': assertValidFieldType('custom', 'create_date', pojo, 'Date'); break;
            case 'update_date': assertValidFieldType('custom', 'update_date', pojo, 'Date'); break;
            case 'sms_code': assertValidFieldType('custom', 'sms_code', pojo, 'number'); break;
            case 'sms_date': assertValidFieldType('custom', 'sms_date', pojo, 'Date'); break;
            case 'token': assertValidFieldType('custom', 'token', pojo, 'string'); break;
            case 'token_date': assertValidFieldType('custom', 'token_date', pojo, 'Date'); break;
            default:
                throw new Error('Invalid custom provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['custom'] = AssertValidCustom;





//////////////////////////////////////////////////////////////////////////////
//
//
//               dealer
//
//
//////////////////////////////////////////////////////////////////////////////


export interface DealerPojo
{
    id?:number;
    name?:string;
    mobile?:string;
    active?:boolean;
    password?:string;
    create_date?:Date;
    update_date?:Date;
    admin?:string;
}

export interface DealerInstance extends sequelize.Instance<DealerPojo>, DealerPojo { }

export interface DealerModel extends sequelize.Model<DealerInstance, DealerPojo> { }

export function AssertValidDealer(pojo:DealerPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid dealer provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid dealer provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'id': assertValidFieldType('dealer', 'id', pojo, 'number'); break;
            case 'name': assertValidFieldType('dealer', 'name', pojo, 'string'); break;
            case 'mobile': assertValidFieldType('dealer', 'mobile', pojo, 'string'); break;
            case 'active': assertValidFieldType('dealer', 'active', pojo, 'boolean'); break;
            case 'password': assertValidFieldType('dealer', 'password', pojo, 'string'); break;
            case 'create_date': assertValidFieldType('dealer', 'create_date', pojo, 'Date'); break;
            case 'update_date': assertValidFieldType('dealer', 'update_date', pojo, 'Date'); break;
            case 'admin': assertValidFieldType('dealer', 'admin', pojo, 'string'); break;
            default:
                throw new Error('Invalid dealer provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['dealer'] = AssertValidDealer;





//////////////////////////////////////////////////////////////////////////////
//
//
//               mall
//
//
//////////////////////////////////////////////////////////////////////////////


export interface MallPojo
{
    id?:number;
    did?:number;
    name?:string;
    create_date?:Date;
    update_date?:Date;
    appid?:string;
    access_token?:string;
    access_token_expires?:number;
    access_token_time?:number;
    access_refresh_token?:string;
    auth?:boolean;
    auth_time?:Date;
    unauth_time?:Date;
    nick_name?:string;
    head_img?:string;
    user_name?:string;
    alias?:string;
    qrcode_url?:string;
    func?:string;
    ?:DealerPojo;
}

export interface MallInstance extends sequelize.Instance<MallPojo>, MallPojo { }

export interface MallModel extends sequelize.Model<MallInstance, MallPojo> { }

export function AssertValidMall(pojo:MallPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid mall provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid mall provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'id': assertValidFieldType('mall', 'id', pojo, 'number'); break;
            case 'did': assertValidFieldType('mall', 'did', pojo, 'number'); break;
            case 'name': assertValidFieldType('mall', 'name', pojo, 'string'); break;
            case 'create_date': assertValidFieldType('mall', 'create_date', pojo, 'Date'); break;
            case 'update_date': assertValidFieldType('mall', 'update_date', pojo, 'Date'); break;
            case 'appid': assertValidFieldType('mall', 'appid', pojo, 'string'); break;
            case 'access_token': assertValidFieldType('mall', 'access_token', pojo, 'string'); break;
            case 'access_token_expires': assertValidFieldType('mall', 'access_token_expires', pojo, 'number'); break;
            case 'access_token_time': assertValidFieldType('mall', 'access_token_time', pojo, 'number'); break;
            case 'access_refresh_token': assertValidFieldType('mall', 'access_refresh_token', pojo, 'string'); break;
            case 'auth': assertValidFieldType('mall', 'auth', pojo, 'boolean'); break;
            case 'auth_time': assertValidFieldType('mall', 'auth_time', pojo, 'Date'); break;
            case 'unauth_time': assertValidFieldType('mall', 'unauth_time', pojo, 'Date'); break;
            case 'nick_name': assertValidFieldType('mall', 'nick_name', pojo, 'string'); break;
            case 'head_img': assertValidFieldType('mall', 'head_img', pojo, 'string'); break;
            case 'user_name': assertValidFieldType('mall', 'user_name', pojo, 'string'); break;
            case 'alias': assertValidFieldType('mall', 'alias', pojo, 'string'); break;
            case 'qrcode_url': assertValidFieldType('mall', 'qrcode_url', pojo, 'string'); break;
            case 'func': assertValidFieldType('mall', 'func', pojo, 'string'); break;
            case '': assertValidFieldType('mall', '', pojo, 'DealerPojo'); break;
            default:
                throw new Error('Invalid mall provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['mall'] = AssertValidMall;





//////////////////////////////////////////////////////////////////////////////
//
//
//               order
//
//
//////////////////////////////////////////////////////////////////////////////


export interface OrderPojo
{
    id?:number;
    did?:number;
    cid?:number;
    create_time?:Date;
    fee?:number;
    type?:boolean;
}

export interface OrderInstance extends sequelize.Instance<OrderPojo>, OrderPojo { }

export interface OrderModel extends sequelize.Model<OrderInstance, OrderPojo> { }

export function AssertValidOrder(pojo:OrderPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid order provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid order provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'id': assertValidFieldType('order', 'id', pojo, 'number'); break;
            case 'did': assertValidFieldType('order', 'did', pojo, 'number'); break;
            case 'cid': assertValidFieldType('order', 'cid', pojo, 'number'); break;
            case 'create_time': assertValidFieldType('order', 'create_time', pojo, 'Date'); break;
            case 'fee': assertValidFieldType('order', 'fee', pojo, 'number'); break;
            case 'type': assertValidFieldType('order', 'type', pojo, 'boolean'); break;
            default:
                throw new Error('Invalid order provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['order'] = AssertValidOrder;





//////////////////////////////////////////////////////////////////////////////
//
//
//               order_detail
//
//
//////////////////////////////////////////////////////////////////////////////


export interface OrderDetailPojo
{
    id?:number;
    oid?:number;
    player_id?:number;
    start_date?:Date;
    end_date?:Date;
    start_hour?:number;
    end_hour?:number;
    fee?:number;
    type?:boolean;
}

export interface OrderDetailInstance extends sequelize.Instance<OrderDetailPojo>, OrderDetailPojo { }

export interface OrderDetailModel extends sequelize.Model<OrderDetailInstance, OrderDetailPojo> { }

export function AssertValidOrderDetail(pojo:OrderDetailPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid order_detail provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid order_detail provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'id': assertValidFieldType('order_detail', 'id', pojo, 'number'); break;
            case 'oid': assertValidFieldType('order_detail', 'oid', pojo, 'number'); break;
            case 'player_id': assertValidFieldType('order_detail', 'player_id', pojo, 'number'); break;
            case 'start_date': assertValidFieldType('order_detail', 'start_date', pojo, 'Date'); break;
            case 'end_date': assertValidFieldType('order_detail', 'end_date', pojo, 'Date'); break;
            case 'start_hour': assertValidFieldType('order_detail', 'start_hour', pojo, 'number'); break;
            case 'end_hour': assertValidFieldType('order_detail', 'end_hour', pojo, 'number'); break;
            case 'fee': assertValidFieldType('order_detail', 'fee', pojo, 'number'); break;
            case 'type': assertValidFieldType('order_detail', 'type', pojo, 'boolean'); break;
            default:
                throw new Error('Invalid order_detail provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['order_detail'] = AssertValidOrderDetail;





//////////////////////////////////////////////////////////////////////////////
//
//
//               program
//
//
//////////////////////////////////////////////////////////////////////////////


export interface ProgramPojo
{
    id?:number;
    did?:number;
    cid?:number;
    code?:string;
    name?:string;
    resolution?:string;
    bgmusic?:string;
    preview_image?:string;
    update_date?:Date;
    first_image?:string;
    size?:number;
    auth?:boolean;
    material:string;
}

export interface ProgramInstance extends sequelize.Instance<ProgramPojo>, ProgramPojo { }

export interface ProgramModel extends sequelize.Model<ProgramInstance, ProgramPojo> { }

export function AssertValidProgram(pojo:ProgramPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid program provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid program provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'id': assertValidFieldType('program', 'id', pojo, 'number'); break;
            case 'did': assertValidFieldType('program', 'did', pojo, 'number'); break;
            case 'cid': assertValidFieldType('program', 'cid', pojo, 'number'); break;
            case 'code': assertValidFieldType('program', 'code', pojo, 'string'); break;
            case 'name': assertValidFieldType('program', 'name', pojo, 'string'); break;
            case 'resolution': assertValidFieldType('program', 'resolution', pojo, 'string'); break;
            case 'bgmusic': assertValidFieldType('program', 'bgmusic', pojo, 'string'); break;
            case 'preview_image': assertValidFieldType('program', 'preview_image', pojo, 'string'); break;
            case 'update_date': assertValidFieldType('program', 'update_date', pojo, 'Date'); break;
            case 'first_image': assertValidFieldType('program', 'first_image', pojo, 'string'); break;
            case 'size': assertValidFieldType('program', 'size', pojo, 'number'); break;
            case 'auth': assertValidFieldType('program', 'auth', pojo, 'boolean'); break;
            case 'material': assertValidFieldType('program', 'material', pojo, 'string'); break;
            default:
                throw new Error('Invalid program provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['program'] = AssertValidProgram;





//////////////////////////////////////////////////////////////////////////////
//
//
//               publish_history
//
//
//////////////////////////////////////////////////////////////////////////////


export interface PublishHistoryPojo
{
    id?:string;
    code?:string;
    did?:number;
    cid?:number;
    program?:number;
    name?:string;
    start_date?:Date;
    expired_date?:Date;
    timing_date?:Date;
    publish_date?:Date;
    create_date?:Date;
    schedule?:string;
    urgency?:boolean;
    engross?:boolean;
    type?:boolean;
}

export interface PublishHistoryInstance extends sequelize.Instance<PublishHistoryPojo>, PublishHistoryPojo { }

export interface PublishHistoryModel extends sequelize.Model<PublishHistoryInstance, PublishHistoryPojo> { }

export function AssertValidPublishHistory(pojo:PublishHistoryPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid publish_history provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid publish_history provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'id': assertValidFieldType('publish_history', 'id', pojo, 'string'); break;
            case 'code': assertValidFieldType('publish_history', 'code', pojo, 'string'); break;
            case 'did': assertValidFieldType('publish_history', 'did', pojo, 'number'); break;
            case 'cid': assertValidFieldType('publish_history', 'cid', pojo, 'number'); break;
            case 'program': assertValidFieldType('publish_history', 'program', pojo, 'number'); break;
            case 'name': assertValidFieldType('publish_history', 'name', pojo, 'string'); break;
            case 'start_date': assertValidFieldType('publish_history', 'start_date', pojo, 'Date'); break;
            case 'expired_date': assertValidFieldType('publish_history', 'expired_date', pojo, 'Date'); break;
            case 'timing_date': assertValidFieldType('publish_history', 'timing_date', pojo, 'Date'); break;
            case 'publish_date': assertValidFieldType('publish_history', 'publish_date', pojo, 'Date'); break;
            case 'create_date': assertValidFieldType('publish_history', 'create_date', pojo, 'Date'); break;
            case 'schedule': assertValidFieldType('publish_history', 'schedule', pojo, 'string'); break;
            case 'urgency': assertValidFieldType('publish_history', 'urgency', pojo, 'boolean'); break;
            case 'engross': assertValidFieldType('publish_history', 'engross', pojo, 'boolean'); break;
            case 'type': assertValidFieldType('publish_history', 'type', pojo, 'boolean'); break;
            default:
                throw new Error('Invalid publish_history provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['publish_history'] = AssertValidPublishHistory;





//////////////////////////////////////////////////////////////////////////////
//
//
//               publish_in
//
//
//////////////////////////////////////////////////////////////////////////////


export interface PublishInPojo
{
    id?:number;
    task_id?:string;
    player_id?:number;
    publish_id?:string;
    publish_code?:string;
    program_id?:number;
    program_name?:string;
    status?:boolean;
    expiration_time?:Date;
    create_time?:Date;
    accept_time?:Date;
    finish_time?:Date;
    delete_time?:Date;
    publish_time?:Date;
    publish_type?:string;
}

export interface PublishInInstance extends sequelize.Instance<PublishInPojo>, PublishInPojo { }

export interface PublishInModel extends sequelize.Model<PublishInInstance, PublishInPojo> { }

export function AssertValidPublishIn(pojo:PublishInPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid publish_in provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid publish_in provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'id': assertValidFieldType('publish_in', 'id', pojo, 'number'); break;
            case 'task_id': assertValidFieldType('publish_in', 'task_id', pojo, 'string'); break;
            case 'player_id': assertValidFieldType('publish_in', 'player_id', pojo, 'number'); break;
            case 'publish_id': assertValidFieldType('publish_in', 'publish_id', pojo, 'string'); break;
            case 'publish_code': assertValidFieldType('publish_in', 'publish_code', pojo, 'string'); break;
            case 'program_id': assertValidFieldType('publish_in', 'program_id', pojo, 'number'); break;
            case 'program_name': assertValidFieldType('publish_in', 'program_name', pojo, 'string'); break;
            case 'status': assertValidFieldType('publish_in', 'status', pojo, 'boolean'); break;
            case 'expiration_time': assertValidFieldType('publish_in', 'expiration_time', pojo, 'Date'); break;
            case 'create_time': assertValidFieldType('publish_in', 'create_time', pojo, 'Date'); break;
            case 'accept_time': assertValidFieldType('publish_in', 'accept_time', pojo, 'Date'); break;
            case 'finish_time': assertValidFieldType('publish_in', 'finish_time', pojo, 'Date'); break;
            case 'delete_time': assertValidFieldType('publish_in', 'delete_time', pojo, 'Date'); break;
            case 'publish_time': assertValidFieldType('publish_in', 'publish_time', pojo, 'Date'); break;
            case 'publish_type': assertValidFieldType('publish_in', 'publish_type', pojo, 'string'); break;
            default:
                throw new Error('Invalid publish_in provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['publish_in'] = AssertValidPublishIn;





var BOOLEAN_TYPE:string = typeof(true);
var NUMBER_TYPE:string = typeof(1);
var STRING_TYPE:string = typeof('');
var FUNCTION_TYPE:string = typeof(function() {});
var DATE_EXPECTED_TYPE:string = 'Date';
var BUFFER_EXPECTED_TYPE:string = 'Buffer';
var BUFFER_EXISTS:boolean = typeof Buffer !== 'undefined'; //in node exists, in js not, so only validate in node

function assertValidFieldType(pojoName:string, fieldName:string, pojo:any, expectedType:string):void {

    var value:any = pojo[fieldName];
    var actualType:string = typeof value;

    if (value === undefined || value === null) {
        return;
    }

    switch(expectedType) {
        case BOOLEAN_TYPE:
            if (actualType !== BOOLEAN_TYPE && actualType !== NUMBER_TYPE) {
                err();
            }
            pojo[fieldName] = Boolean(value);
            return;

        case NUMBER_TYPE:
            if (actualType === NUMBER_TYPE) {
                return;
            }
            if (actualType === STRING_TYPE) {
                var newValue:number = parseFloat(value);
                if (isNaN(newValue)) {
                    err();
                }
                pojo[fieldName] = newValue;
            }
            return;

        case STRING_TYPE:
            if (actualType !== STRING_TYPE) {
                pojo[fieldName] = value.toString();
            }
            return;

        case DATE_EXPECTED_TYPE:
            var getTime:Function = value.getTime;
            if (typeof getTime === FUNCTION_TYPE) {
                var timeValue:number = value.getTime();
                if (isNaN(timeValue)){
                    err();
                }
                if (!(value instanceof Date)) {
                    pojo[fieldName] = new Date(timeValue);
                }
                return;
            }

            if (actualType === STRING_TYPE) {
                var newDate:Date = new Date(value);
                if (!isNaN(newDate.getTime())) {
                    pojo[fieldName] = newDate;
                    return;
                }
            }
            err();
            return;

        case BUFFER_EXPECTED_TYPE:
            if (!BUFFER_EXISTS) {
                return;
            }

            if (!(value instanceof Buffer)) {
                err();
            }
            return;
    }

    // one pojo of array of array of pojos?
    if (expectedType.length > 3 && expectedType.substr(expectedType.length - 2, 2) === '[]') {
        var individualPojoType:string = expectedType.substr(0, expectedType.length - 6);

        var asserter:Function = asserters[individualPojoType];
        if (typeof asserter !== FUNCTION_TYPE) {
            err();
        }

        if (isNaN(value.length)) {
            err();
        }
        for(var i:number = 0; i<value.length; i++) {
            try {
                asserter(value[i], true);
            } catch(e) {
                err('Error at index \'' + i + '\': ' + e.message);
            }
        }

        // all instances valid
        return;
    }

    var asserter:Function = asserters[expectedType.substr(0, expectedType.length - 4)];
    if (typeof asserter !== FUNCTION_TYPE) {
        expectedTypeErr();
    }

    try {
        asserter(value, true);
    } catch(e) {
        err(e.message);
    }

    function err(extraMessage?:string):void {
        var message:string = 'Invalid ' + pojoName + ' provided. Field \'' + fieldName + '\' with value \'' + safeValue(value) + '\' is not a valid \'' + expectedType + '\'.';
        if (extraMessage !== undefined) {
            message += ' ' + extraMessage;
        }
        throw new Error(message);
    }

    function expectedTypeErr():void {
        throw new Error('Cannot validate \'' + pojoName + '\' field \'' + fieldName + '\' since expected type provided \'' + expectedType + '\' is not understood.');
    }
}

function safeValue(value:any):string {

    if (value === undefined || value === null) {
        return typeof value;
    }

    var s:string = value.toString();
    return s.substr(0, 100);
}

export interface Reference {
    tableName:string;
    primaryKey:string;
    foreignKey:string;
    as:string;
}
