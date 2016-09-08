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
import types = require('./sequelize-types');

var Sequelize:sequelize.SequelizeStatic = require('sequelize');

export var initialized:boolean = false;
export var SEQUELIZE:sequelize.Sequelize;

export var AdminModel:types.AdminModel;
export var AreaModel:types.AreaModel;
export var BoardModel:types.BoardModel;
export var BoardGroupModel:types.BoardGroupModel;
export var BoardGroupFeeModel:types.BoardGroupFeeModel;
export var ComponentModel:types.ComponentModel;
export var CustomModel:types.CustomModel;
export var DealerModel:types.DealerModel;
export var MallModel:types.MallModel;
export var OrderModel:types.OrderModel;
export var OrderDetailModel:types.OrderDetailModel;
export var ProgramModel:types.ProgramModel;
export var PublishHistoryModel:types.PublishHistoryModel;
export var PublishInModel:types.PublishInModel;


export function initialize(database:string, username:string, password:string, options:sequelize.Options):any
{
    if (initialized)
    {
        return;
    }

    SEQUELIZE = new Sequelize(database, username, password, options);

    AdminModel = <types.AdminModel> SEQUELIZE.define<types.AdminInstance, types.AdminPojo>('admin', {
        'id': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'name': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'password': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'create_date': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'update_date': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'admin': {type: Sequelize.ENUM("mbAdmin","mbUser"), allowNull: false, defaultValue: "mbUser"}
        },
        {
            classMethods: {
                GetAdmin:(admin:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(admin);
                    if (isNaN(id)) {
                        if (admin['id'] !== undefined) { where['id'] = admin['id']}
                        if (admin['name'] !== undefined) { where['name'] = admin['name']}
                        if (admin['password'] !== undefined) { where['password'] = admin['password']}
                        if (admin['create_date'] !== undefined) { where['create_date'] = admin['create_date']}
                        if (admin['update_date'] !== undefined) { where['update_date'] = admin['update_date']}
                        if (admin['admin'] !== undefined) { where['admin'] = admin['admin']}
                    } else {
                        where['!!cannotFindIdFieldOnadmin!!'] = id;
                    }
                    return AdminModel.find({where: where});
                }
            }
        });
    
    AreaModel = <types.AreaModel> SEQUELIZE.define<types.AreaInstance, types.AreaPojo>('area', {
        'id': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'did': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'name': {type: Sequelize.STRING, allowNull: false, defaultValue: ""}
        },
        {
            classMethods: {
                GetArea:(area:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(area);
                    if (isNaN(id)) {
                        if (area['id'] !== undefined) { where['id'] = area['id']}
                        if (area['did'] !== undefined) { where['did'] = area['did']}
                        if (area['name'] !== undefined) { where['name'] = area['name']}
                    } else {
                        where['!!cannotFindIdFieldOnarea!!'] = id;
                    }
                    return AreaModel.find({where: where});
                }
            }
        });
    
    BoardModel = <types.BoardModel> SEQUELIZE.define<types.BoardInstance, types.BoardPojo>('board', {
        'id': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'did': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'name': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'aid': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'gid': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"}
        },
        {
            classMethods: {
                GetBoard:(board:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(board);
                    if (isNaN(id)) {
                        if (board['id'] !== undefined) { where['id'] = board['id']}
                        if (board['did'] !== undefined) { where['did'] = board['did']}
                        if (board['name'] !== undefined) { where['name'] = board['name']}
                        if (board['aid'] !== undefined) { where['aid'] = board['aid']}
                        if (board['gid'] !== undefined) { where['gid'] = board['gid']}
                    } else {
                        where['!!cannotFindIdFieldOnboard!!'] = id;
                    }
                    return BoardModel.find({where: where});
                }
            }
        });
    
    BoardGroupModel = <types.BoardGroupModel> SEQUELIZE.define<types.BoardGroupInstance, types.BoardGroupPojo>('board_group', {
        'id': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'did': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'name': {type: Sequelize.STRING, allowNull: false, defaultValue: ""}
        },
        {
            classMethods: {
                GetBoardGroup:(board_group:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(board_group);
                    if (isNaN(id)) {
                        if (board_group['id'] !== undefined) { where['id'] = board_group['id']}
                        if (board_group['did'] !== undefined) { where['did'] = board_group['did']}
                        if (board_group['name'] !== undefined) { where['name'] = board_group['name']}
                    } else {
                        where['!!cannotFindIdFieldOnboard_group!!'] = id;
                    }
                    return BoardGroupModel.find({where: where});
                }
            }
        });
    
    BoardGroupFeeModel = <types.BoardGroupFeeModel> SEQUELIZE.define<types.BoardGroupFeeInstance, types.BoardGroupFeePojo>('board_group_fee', {
        'id': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'bid': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'start_hour': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'end_hour': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'fee': {type: Sequelize.DECIMAL, allowNull: false, defaultValue: "0.00"}
        },
        {
            classMethods: {
                GetBoardGroupFee:(board_group_fee:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(board_group_fee);
                    if (isNaN(id)) {
                        if (board_group_fee['id'] !== undefined) { where['id'] = board_group_fee['id']}
                        if (board_group_fee['bid'] !== undefined) { where['bid'] = board_group_fee['bid']}
                        if (board_group_fee['start_hour'] !== undefined) { where['start_hour'] = board_group_fee['start_hour']}
                        if (board_group_fee['end_hour'] !== undefined) { where['end_hour'] = board_group_fee['end_hour']}
                        if (board_group_fee['fee'] !== undefined) { where['fee'] = board_group_fee['fee']}
                    } else {
                        where['!!cannotFindIdFieldOnboard_group_fee!!'] = id;
                    }
                    return BoardGroupFeeModel.find({where: where});
                }
            }
        });
    
    ComponentModel = <types.ComponentModel> SEQUELIZE.define<types.ComponentInstance, types.ComponentPojo>('component', {
        'name': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'body': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'createtime': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'expires_in': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"}
        },
        {
            classMethods: {
                GetComponent:(component:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(component);
                    if (isNaN(id)) {
                        if (component['name'] !== undefined) { where['name'] = component['name']}
                        if (component['body'] !== undefined) { where['body'] = component['body']}
                        if (component['createtime'] !== undefined) { where['createtime'] = component['createtime']}
                        if (component['expires_in'] !== undefined) { where['expires_in'] = component['expires_in']}
                    } else {
                        where['!!cannotFindIdFieldOncomponent!!'] = id;
                    }
                    return ComponentModel.find({where: where});
                }
            }
        });
    
    CustomModel = <types.CustomModel> SEQUELIZE.define<types.CustomInstance, types.CustomPojo>('custom', {
        'id': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'did': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'name': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'mobile': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'active': {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
        'create_date': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'update_date': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'sms_code': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'sms_date': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'token': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'token_date': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"}
        },
        {
            classMethods: {
                GetCustom:(custom:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(custom);
                    if (isNaN(id)) {
                        if (custom['id'] !== undefined) { where['id'] = custom['id']}
                        if (custom['did'] !== undefined) { where['did'] = custom['did']}
                        if (custom['name'] !== undefined) { where['name'] = custom['name']}
                        if (custom['mobile'] !== undefined) { where['mobile'] = custom['mobile']}
                        if (custom['active'] !== undefined) { where['active'] = custom['active']}
                        if (custom['create_date'] !== undefined) { where['create_date'] = custom['create_date']}
                        if (custom['update_date'] !== undefined) { where['update_date'] = custom['update_date']}
                        if (custom['sms_code'] !== undefined) { where['sms_code'] = custom['sms_code']}
                        if (custom['sms_date'] !== undefined) { where['sms_date'] = custom['sms_date']}
                        if (custom['token'] !== undefined) { where['token'] = custom['token']}
                        if (custom['token_date'] !== undefined) { where['token_date'] = custom['token_date']}
                    } else {
                        where['!!cannotFindIdFieldOncustom!!'] = id;
                    }
                    return CustomModel.find({where: where});
                }
            }
        });
    
    DealerModel = <types.DealerModel> SEQUELIZE.define<types.DealerInstance, types.DealerPojo>('dealer', {
        'id': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'name': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'mobile': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'active': {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
        'password': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'create_date': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'update_date': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'admin': {type: Sequelize.ENUM("dAdmin","dUser"), allowNull: false, defaultValue: "dUser"}
        },
        {
            classMethods: {
                GetDealer:(dealer:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(dealer);
                    if (isNaN(id)) {
                        if (dealer['id'] !== undefined) { where['id'] = dealer['id']}
                        if (dealer['name'] !== undefined) { where['name'] = dealer['name']}
                        if (dealer['mobile'] !== undefined) { where['mobile'] = dealer['mobile']}
                        if (dealer['active'] !== undefined) { where['active'] = dealer['active']}
                        if (dealer['password'] !== undefined) { where['password'] = dealer['password']}
                        if (dealer['create_date'] !== undefined) { where['create_date'] = dealer['create_date']}
                        if (dealer['update_date'] !== undefined) { where['update_date'] = dealer['update_date']}
                        if (dealer['admin'] !== undefined) { where['admin'] = dealer['admin']}
                    } else {
                        where['!!cannotFindIdFieldOndealer!!'] = id;
                    }
                    return DealerModel.find({where: where});
                }
            }
        });
    
    MallModel = <types.MallModel> SEQUELIZE.define<types.MallInstance, types.MallPojo>('mall', {
        'id': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'did': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'name': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'create_date': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'update_date': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'appid': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'access_token': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'access_token_expires': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'access_token_time': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'access_refresh_token': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'auth': {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
        'auth_time': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'unauth_time': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'nick_name': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'head_img': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'user_name': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'alias': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'qrcode_url': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'func': {type: Sequelize.STRING, allowNull: false, defaultValue: ""}
        },
        {
            classMethods: {
                GetMall:(mall:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(mall);
                    if (isNaN(id)) {
                        if (mall['id'] !== undefined) { where['id'] = mall['id']}
                        if (mall['did'] !== undefined) { where['did'] = mall['did']}
                        if (mall['name'] !== undefined) { where['name'] = mall['name']}
                        if (mall['create_date'] !== undefined) { where['create_date'] = mall['create_date']}
                        if (mall['update_date'] !== undefined) { where['update_date'] = mall['update_date']}
                        if (mall['appid'] !== undefined) { where['appid'] = mall['appid']}
                        if (mall['access_token'] !== undefined) { where['access_token'] = mall['access_token']}
                        if (mall['access_token_expires'] !== undefined) { where['access_token_expires'] = mall['access_token_expires']}
                        if (mall['access_token_time'] !== undefined) { where['access_token_time'] = mall['access_token_time']}
                        if (mall['access_refresh_token'] !== undefined) { where['access_refresh_token'] = mall['access_refresh_token']}
                        if (mall['auth'] !== undefined) { where['auth'] = mall['auth']}
                        if (mall['auth_time'] !== undefined) { where['auth_time'] = mall['auth_time']}
                        if (mall['unauth_time'] !== undefined) { where['unauth_time'] = mall['unauth_time']}
                        if (mall['nick_name'] !== undefined) { where['nick_name'] = mall['nick_name']}
                        if (mall['head_img'] !== undefined) { where['head_img'] = mall['head_img']}
                        if (mall['user_name'] !== undefined) { where['user_name'] = mall['user_name']}
                        if (mall['alias'] !== undefined) { where['alias'] = mall['alias']}
                        if (mall['qrcode_url'] !== undefined) { where['qrcode_url'] = mall['qrcode_url']}
                        if (mall['func'] !== undefined) { where['func'] = mall['func']}
                    } else {
                        where['!!cannotFindIdFieldOnmall!!'] = id;
                    }
                    return MallModel.find({where: where});
                }
            }
        });
    
    OrderModel = <types.OrderModel> SEQUELIZE.define<types.OrderInstance, types.OrderPojo>('order', {
        'id': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'did': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'cid': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'create_time': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'fee': {type: Sequelize.DECIMAL, allowNull: false, defaultValue: "0.00"},
        'type': {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true}
        },
        {
            classMethods: {
                GetOrder:(order:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(order);
                    if (isNaN(id)) {
                        if (order['id'] !== undefined) { where['id'] = order['id']}
                        if (order['did'] !== undefined) { where['did'] = order['did']}
                        if (order['cid'] !== undefined) { where['cid'] = order['cid']}
                        if (order['create_time'] !== undefined) { where['create_time'] = order['create_time']}
                        if (order['fee'] !== undefined) { where['fee'] = order['fee']}
                        if (order['type'] !== undefined) { where['type'] = order['type']}
                    } else {
                        where['!!cannotFindIdFieldOnorder!!'] = id;
                    }
                    return OrderModel.find({where: where});
                }
            }
        });
    
    OrderDetailModel = <types.OrderDetailModel> SEQUELIZE.define<types.OrderDetailInstance, types.OrderDetailPojo>('order_detail', {
        'id': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'oid': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'player_id': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'start_date': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'end_date': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'start_hour': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'end_hour': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'fee': {type: Sequelize.DECIMAL, allowNull: false, defaultValue: "0.00"},
        'type': {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true}
        },
        {
            classMethods: {
                GetOrderDetail:(order_detail:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(order_detail);
                    if (isNaN(id)) {
                        if (order_detail['id'] !== undefined) { where['id'] = order_detail['id']}
                        if (order_detail['oid'] !== undefined) { where['oid'] = order_detail['oid']}
                        if (order_detail['player_id'] !== undefined) { where['player_id'] = order_detail['player_id']}
                        if (order_detail['start_date'] !== undefined) { where['start_date'] = order_detail['start_date']}
                        if (order_detail['end_date'] !== undefined) { where['end_date'] = order_detail['end_date']}
                        if (order_detail['start_hour'] !== undefined) { where['start_hour'] = order_detail['start_hour']}
                        if (order_detail['end_hour'] !== undefined) { where['end_hour'] = order_detail['end_hour']}
                        if (order_detail['fee'] !== undefined) { where['fee'] = order_detail['fee']}
                        if (order_detail['type'] !== undefined) { where['type'] = order_detail['type']}
                    } else {
                        where['!!cannotFindIdFieldOnorder_detail!!'] = id;
                    }
                    return OrderDetailModel.find({where: where});
                }
            }
        });
    
    ProgramModel = <types.ProgramModel> SEQUELIZE.define<types.ProgramInstance, types.ProgramPojo>('program', {
        'id': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'did': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'cid': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'code': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'name': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'resolution': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'bgmusic': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'preview_image': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'update_date': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'first_image': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'size': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'auth': {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
        'material': {type: Sequelize.STRING, allowNull: false}
        },
        {
            classMethods: {
                GetProgram:(program:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(program);
                    if (isNaN(id)) {
                        if (program['id'] !== undefined) { where['id'] = program['id']}
                        if (program['did'] !== undefined) { where['did'] = program['did']}
                        if (program['cid'] !== undefined) { where['cid'] = program['cid']}
                        if (program['code'] !== undefined) { where['code'] = program['code']}
                        if (program['name'] !== undefined) { where['name'] = program['name']}
                        if (program['resolution'] !== undefined) { where['resolution'] = program['resolution']}
                        if (program['bgmusic'] !== undefined) { where['bgmusic'] = program['bgmusic']}
                        if (program['preview_image'] !== undefined) { where['preview_image'] = program['preview_image']}
                        if (program['update_date'] !== undefined) { where['update_date'] = program['update_date']}
                        if (program['first_image'] !== undefined) { where['first_image'] = program['first_image']}
                        if (program['size'] !== undefined) { where['size'] = program['size']}
                        if (program['auth'] !== undefined) { where['auth'] = program['auth']}
                        if (program['material'] !== undefined) { where['material'] = program['material']}
                    } else {
                        where['!!cannotFindIdFieldOnprogram!!'] = id;
                    }
                    return ProgramModel.find({where: where});
                }
            }
        });
    
    PublishHistoryModel = <types.PublishHistoryModel> SEQUELIZE.define<types.PublishHistoryInstance, types.PublishHistoryPojo>('publish_history', {
        'id': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'code': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'did': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'cid': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'program': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'name': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'start_date': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'expired_date': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'timing_date': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'publish_date': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'create_date': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'schedule': {type: Sequelize.STRING},
        'urgency': {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
        'engross': {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
        'type': {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true}
        },
        {
            classMethods: {
                GetPublishHistory:(publish_history:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(publish_history);
                    if (isNaN(id)) {
                        if (publish_history['id'] !== undefined) { where['id'] = publish_history['id']}
                        if (publish_history['code'] !== undefined) { where['code'] = publish_history['code']}
                        if (publish_history['did'] !== undefined) { where['did'] = publish_history['did']}
                        if (publish_history['cid'] !== undefined) { where['cid'] = publish_history['cid']}
                        if (publish_history['program'] !== undefined) { where['program'] = publish_history['program']}
                        if (publish_history['name'] !== undefined) { where['name'] = publish_history['name']}
                        if (publish_history['start_date'] !== undefined) { where['start_date'] = publish_history['start_date']}
                        if (publish_history['expired_date'] !== undefined) { where['expired_date'] = publish_history['expired_date']}
                        if (publish_history['timing_date'] !== undefined) { where['timing_date'] = publish_history['timing_date']}
                        if (publish_history['publish_date'] !== undefined) { where['publish_date'] = publish_history['publish_date']}
                        if (publish_history['create_date'] !== undefined) { where['create_date'] = publish_history['create_date']}
                        if (publish_history['schedule'] !== undefined) { where['schedule'] = publish_history['schedule']}
                        if (publish_history['urgency'] !== undefined) { where['urgency'] = publish_history['urgency']}
                        if (publish_history['engross'] !== undefined) { where['engross'] = publish_history['engross']}
                        if (publish_history['type'] !== undefined) { where['type'] = publish_history['type']}
                    } else {
                        where['!!cannotFindIdFieldOnpublish_history!!'] = id;
                    }
                    return PublishHistoryModel.find({where: where});
                }
            }
        });
    
    PublishInModel = <types.PublishInModel> SEQUELIZE.define<types.PublishInInstance, types.PublishInPojo>('publish_in', {
        'id': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'task_id': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'player_id': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'publish_id': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'publish_code': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'program_id': {type: Sequelize.INTEGER, allowNull: false, defaultValue: "0"},
        'program_name': {type: Sequelize.STRING, allowNull: false, defaultValue: ""},
        'status': {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
        'expiration_time': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'create_time': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'accept_time': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'finish_time': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'delete_time': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'publish_time': {type: Sequelize.DATE, allowNull: false, defaultValue: "CURRENT_TIMESTAMP"},
        'publish_type': {type: Sequelize.STRING, allowNull: false, defaultValue: ""}
        },
        {
            classMethods: {
                GetPublishIn:(publish_in:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(publish_in);
                    if (isNaN(id)) {
                        if (publish_in['id'] !== undefined) { where['id'] = publish_in['id']}
                        if (publish_in['task_id'] !== undefined) { where['task_id'] = publish_in['task_id']}
                        if (publish_in['player_id'] !== undefined) { where['player_id'] = publish_in['player_id']}
                        if (publish_in['publish_id'] !== undefined) { where['publish_id'] = publish_in['publish_id']}
                        if (publish_in['publish_code'] !== undefined) { where['publish_code'] = publish_in['publish_code']}
                        if (publish_in['program_id'] !== undefined) { where['program_id'] = publish_in['program_id']}
                        if (publish_in['program_name'] !== undefined) { where['program_name'] = publish_in['program_name']}
                        if (publish_in['status'] !== undefined) { where['status'] = publish_in['status']}
                        if (publish_in['expiration_time'] !== undefined) { where['expiration_time'] = publish_in['expiration_time']}
                        if (publish_in['create_time'] !== undefined) { where['create_time'] = publish_in['create_time']}
                        if (publish_in['accept_time'] !== undefined) { where['accept_time'] = publish_in['accept_time']}
                        if (publish_in['finish_time'] !== undefined) { where['finish_time'] = publish_in['finish_time']}
                        if (publish_in['delete_time'] !== undefined) { where['delete_time'] = publish_in['delete_time']}
                        if (publish_in['publish_time'] !== undefined) { where['publish_time'] = publish_in['publish_time']}
                        if (publish_in['publish_type'] !== undefined) { where['publish_type'] = publish_in['publish_type']}
                    } else {
                        where['!!cannotFindIdFieldOnpublish_in!!'] = id;
                    }
                    return PublishInModel.find({where: where});
                }
            }
        });
    
    DealerModel.hasMany(MallModel, {foreignKey: 'did' });
    MallModel.belongsTo(DealerModel, {as: undefined, foreignKey: 'did' });

    
    return exports;
}
