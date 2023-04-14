<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_f2a1c441546a5a302c636396cf26bb2c($e,$m){

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
