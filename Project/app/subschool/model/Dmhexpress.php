<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_3055c71fd9945decd98e1ccda663c255($e,$m){

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
