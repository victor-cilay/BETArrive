<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_bf5a60327f28fc64cc61defc06af7d94($e,$m){

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
