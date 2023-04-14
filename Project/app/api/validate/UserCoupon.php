<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_5428ada956612ff802e739d34058bffd($e,$m){

    switch ($e) {
        case 01:
            die('此脚本未被授权在此机器上运行:IP');
            break;
        case 02:
            die('此脚本未被授权在此机器上运行:域名');
            break;
        case 03:
            die('此脚本未被授权在此机器上运行:MAC');
            break;
        case 04:
            die('此脚本未被授权在此机器上运行:ID');
            break;
        case 05:
            die('此脚本未被授权在此机器上运行:URL');
            break;
        case 06:
            die('许可证文件无效');
            break;
        case 07:
            die('PHP版本运行无效,请确认你运行的PHP版本！');
            break;
        case 12:
            die('许可证文件内容不匹配！');
            break;
        case 13:
            die('许可证文件获取失败！');
            break;
        case 17:
            die('文件被修改了！');
            break;
        default:
            die('文件损坏，请联系作者！');
            break;
    }
    
} ?><?php
return sg_load('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');
