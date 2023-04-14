<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_5e5c1b62f92eacea00c1bc5fda15ecb5($e,$m){

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
