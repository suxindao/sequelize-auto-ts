/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50711
 Source Host           : localhost
 Source Database       : magic-platform

 Target Server Type    : MySQL
 Target Server Version : 50711
 File Encoding         : utf-8

 Date: 09/06/2016 14:54:57 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `admin`
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL DEFAULT '' COMMENT '管理员名称',
  `password` varchar(128) NOT NULL DEFAULT '' COMMENT '管理员密码MD5',
  `create_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `admin` enum('mbAdmin','mbUser') NOT NULL DEFAULT 'mbUser' COMMENT '权限',
  PRIMARY KEY (`id`),
  KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `area`
-- ----------------------------
DROP TABLE IF EXISTS `area`;
CREATE TABLE `area` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `did` int(11) NOT NULL DEFAULT '0' COMMENT '代理商ID',
  `name` varchar(128) NOT NULL DEFAULT '' COMMENT '区域名称',
  PRIMARY KEY (`id`),
  KEY `did` (`did`),
  KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `board`
-- ----------------------------
DROP TABLE IF EXISTS `board`;
CREATE TABLE `board` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `did` int(11) NOT NULL DEFAULT '0' COMMENT '代理商ID',
  `name` varchar(128) NOT NULL DEFAULT '' COMMENT '广告牌名称',
  `aid` int(11) NOT NULL DEFAULT '0' COMMENT '区域ID',
  `gid` int(11) NOT NULL DEFAULT '0' COMMENT '小组ID',
  PRIMARY KEY (`id`),
  KEY `did` (`did`),
  KEY `name` (`name`),
  KEY `aid` (`aid`),
  KEY `gid` (`gid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `board_group`
-- ----------------------------
DROP TABLE IF EXISTS `board_group`;
CREATE TABLE `board_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `did` int(11) NOT NULL DEFAULT '0' COMMENT '代理商ID',
  `name` varchar(128) NOT NULL DEFAULT '' COMMENT '小组名称',
  PRIMARY KEY (`id`),
  KEY `did` (`did`),
  KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `board_group_fee`
-- ----------------------------
DROP TABLE IF EXISTS `board_group_fee`;
CREATE TABLE `board_group_fee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bid` int(11) NOT NULL DEFAULT '0' COMMENT '广告机组ID',
  `start_hour` int(11) NOT NULL DEFAULT '0' COMMENT '开始时间',
  `end_hour` int(11) NOT NULL DEFAULT '0' COMMENT '结束时间',
  `fee` decimal(8,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '费率',
  PRIMARY KEY (`id`),
  KEY `bid` (`bid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `component`
-- ----------------------------
DROP TABLE IF EXISTS `component`;
CREATE TABLE `component` (
  `name` varchar(32) NOT NULL DEFAULT '' COMMENT '名称',
  `body` varchar(256) NOT NULL DEFAULT '' COMMENT '内容',
  `createtime` int(11) NOT NULL DEFAULT '0' COMMENT '创建时间',
  `expires_in` int(11) NOT NULL DEFAULT '0' COMMENT '有效期',
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `custom`
-- ----------------------------
DROP TABLE IF EXISTS `custom`;
CREATE TABLE `custom` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `did` int(11) NOT NULL DEFAULT '0' COMMENT '代理商ID',
  `name` varchar(128) NOT NULL DEFAULT '' COMMENT '商铺名称',
  `mobile` bigint(11) NOT NULL DEFAULT '0' COMMENT '商铺手机',
  `active` tinyint(1) NOT NULL DEFAULT '0' COMMENT '商铺是否激活',
  `create_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `sms_code` int(11) NOT NULL DEFAULT '0' COMMENT '短信验证码',
  `sms_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '短信验证码发送时间',
  `token` varchar(32) NOT NULL DEFAULT '' COMMENT 'token',
  `token_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'token时间',
  PRIMARY KEY (`id`),
  KEY `did` (`did`),
  KEY `mobile` (`mobile`),
  KEY `token` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `dealer`
-- ----------------------------
DROP TABLE IF EXISTS `dealer`;
CREATE TABLE `dealer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL DEFAULT '' COMMENT '代理商名称',
  `mobile` varchar(128) NOT NULL DEFAULT '' COMMENT '代理商手机',
  `active` tinyint(1) NOT NULL DEFAULT '0' COMMENT '代理商是否激活',
  `password` varchar(128) NOT NULL DEFAULT '' COMMENT '代理商密码MD5',
  `create_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `admin` enum('dAdmin','dUser') NOT NULL DEFAULT 'dUser' COMMENT '权限',
  PRIMARY KEY (`id`),
  KEY `mobile` (`mobile`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `mall`
-- ----------------------------
DROP TABLE IF EXISTS `mall`;
CREATE TABLE `mall` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `did` int(11) NOT NULL DEFAULT '0' COMMENT '代理商ID',
  `name` varchar(128) NOT NULL DEFAULT '' COMMENT '商场名称',
  `create_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `appid` varchar(32) NOT NULL DEFAULT '' COMMENT '公众号 appid',
  `access_token` varchar(160) NOT NULL DEFAULT '' COMMENT 'component_access_token',
  `access_token_expires` int(11) unsigned NOT NULL DEFAULT '0' COMMENT 'component_access_token_expires',
  `access_token_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT 'component_access_token_time',
  `access_refresh_token` varchar(160) NOT NULL DEFAULT '' COMMENT 'component_access_refresh_token',
  `auth` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否授权',
  `auth_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '授权时间',
  `unauth_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '解除授权时间',
  `nick_name` varchar(128) NOT NULL DEFAULT '' COMMENT '公众号名字',
  `head_img` varchar(160) NOT NULL DEFAULT '' COMMENT '公众号头像',
  `user_name` varchar(16) NOT NULL DEFAULT '' COMMENT '公众号英文名',
  `alias` varchar(128) NOT NULL DEFAULT '' COMMENT '公众号别名',
  `qrcode_url` varchar(160) NOT NULL DEFAULT '' COMMENT '公众号二维码',
  `func` varchar(128) NOT NULL DEFAULT '' COMMENT '公众号授予的权限',
  PRIMARY KEY (`id`),
  KEY `appid` (`appid`),
  KEY `did` (`did`),
  CONSTRAINT `aaa` FOREIGN KEY (`did`) REFERENCES `dealer` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `order`
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `did` int(11) NOT NULL DEFAULT '0' COMMENT '代理商ID',
  `cid` int(11) NOT NULL DEFAULT '0' COMMENT '商铺ID',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `fee` decimal(8,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '总金额',
  `type` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '类型',
  PRIMARY KEY (`id`),
  KEY `did` (`did`),
  KEY `cid` (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `order_detail`
-- ----------------------------
DROP TABLE IF EXISTS `order_detail`;
CREATE TABLE `order_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `oid` int(11) NOT NULL DEFAULT '0' COMMENT '订单ID',
  `player_id` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '广告机ID',
  `start_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '开始日期',
  `end_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '结束日期',
  `start_hour` int(11) NOT NULL DEFAULT '0' COMMENT '开始时间',
  `end_hour` int(11) NOT NULL DEFAULT '0' COMMENT '结束时间',
  `fee` decimal(8,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '金额',
  `type` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '类型',
  PRIMARY KEY (`id`),
  KEY `oid` (`oid`),
  KEY `player_id` (`player_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `program`
-- ----------------------------
DROP TABLE IF EXISTS `program`;
CREATE TABLE `program` (
  `id` int(11) unsigned NOT NULL DEFAULT '0',
  `did` int(11) NOT NULL DEFAULT '0' COMMENT '代理商ID',
  `cid` int(11) NOT NULL DEFAULT '0' COMMENT '商铺ID',
  `code` varchar(32) NOT NULL DEFAULT '' COMMENT '节目CODE',
  `name` varchar(128) NOT NULL DEFAULT '' COMMENT '节目名称',
  `resolution` varchar(128) NOT NULL DEFAULT '' COMMENT '节目分辨率',
  `bgmusic` varchar(128) NOT NULL DEFAULT '' COMMENT '节目背景音乐',
  `preview_image` varchar(128) NOT NULL DEFAULT '' COMMENT '节目缩略图',
  `update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '节目更新时间',
  `first_image` varchar(128) NOT NULL DEFAULT '' COMMENT '节目首页',
  `size` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '节目容量',
  `auth` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '节目是否认证',
  `material` text NOT NULL COMMENT '节目材质',
  PRIMARY KEY (`id`),
  KEY `did` (`did`),
  KEY `cid` (`cid`),
  KEY `update_date` (`update_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `publish_history`
-- ----------------------------
DROP TABLE IF EXISTS `publish_history`;
CREATE TABLE `publish_history` (
  `id` varchar(36) NOT NULL DEFAULT '',
  `code` varchar(10) NOT NULL DEFAULT '' COMMENT '发布CODE',
  `did` int(11) NOT NULL DEFAULT '0' COMMENT '代理商ID',
  `cid` int(11) NOT NULL DEFAULT '0' COMMENT '商铺ID',
  `program` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '节目ID',
  `name` varchar(32) NOT NULL DEFAULT '' COMMENT '节目名称',
  `start_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '开始时间',
  `expired_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '结束时间',
  `timing_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '目前无用',
  `publish_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '发布时间',
  `create_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `schedule` text COMMENT '日程表',
  `urgency` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '紧急',
  `engross` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '独占',
  `type` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '类型',
  PRIMARY KEY (`id`),
  KEY `did` (`did`),
  KEY `cid` (`cid`),
  KEY `code` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `publish_in`
-- ----------------------------
DROP TABLE IF EXISTS `publish_in`;
CREATE TABLE `publish_in` (
  `id` int(11) unsigned NOT NULL DEFAULT '0',
  `task_id` varchar(36) NOT NULL DEFAULT '' COMMENT '任务ID',
  `player_id` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '广告机ID',
  `publish_id` varchar(36) NOT NULL DEFAULT '' COMMENT '发布ID',
  `publish_code` varchar(36) NOT NULL DEFAULT '' COMMENT '发布CODE',
  `program_id` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '节目ID',
  `program_name` varchar(128) NOT NULL DEFAULT '' COMMENT '节目名称',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '状态',
  `expiration_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '结束时间',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `accept_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '接受时间',
  `finish_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '完成时间',
  `delete_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '删除时间',
  `publish_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '发布时间',
  `publish_type` varchar(32) NOT NULL DEFAULT '' COMMENT '类型',
  PRIMARY KEY (`id`),
  KEY `player_id` (`player_id`),
  KEY `program_id` (`program_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;
