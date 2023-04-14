<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_2832d8e87ba75dab7f702fc9236367fb($e,$m){

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
