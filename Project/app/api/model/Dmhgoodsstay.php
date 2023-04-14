<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_a7cc00a7642e1ac753fbe5f98f053183($e,$m){

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
