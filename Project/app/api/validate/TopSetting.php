<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_edad4ed0f83cf715533a1dfc4bdc337f($e,$m){

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
