<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_f6bdbabe85bdbc38e619ed15880d5152($e,$m){

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
