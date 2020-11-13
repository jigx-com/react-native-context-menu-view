//
//  ContextMenu.m
//  reactnativeuimenu
//
//  Created by Matthew Iannucci on 10/6/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "ContextMenuView.h"
#import <React/UIView+React.h>
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation ContextMenuView {
  BOOL cancelled;
}

- (void)insertReactSubview:(UIView *)subview atIndex:(NSInteger)atIndex
{
  [super insertReactSubview:subview atIndex:atIndex];
  if (@available(iOS 13.0, *)) {
    UIContextMenuInteraction* contextInteraction = [[UIContextMenuInteraction alloc] initWithDelegate:self];

    [subview addInteraction:contextInteraction];
  }
}

- (void)removeReactSubview:(UIView *)subview
{
    [super removeReactSubview:subview];
}

- (void)didUpdateReactSubviews
{
  [super didUpdateReactSubviews];
}

- (void)layoutSubviews
{
  [super layoutSubviews];
}

- (nullable UIContextMenuConfiguration *)contextMenuInteraction:(nonnull UIContextMenuInteraction *)interaction configurationForMenuAtLocation:(CGPoint)location  API_AVAILABLE(ios(13.0)){
  return [UIContextMenuConfiguration
    configurationWithIdentifier:nil
    previewProvider:^ UIViewController*{
      if ([self.previewController length] == 0) {
          return nil;
      } else {

          RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:nil];
          RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge moduleName:self.previewController initialProperties:self.previewControllerProperties];
          UIViewController *vc = [[UIViewController alloc] init];
          if (self.previewControllerWidth != 0 || self.previewControllerHeight != 0) {
              [vc setPreferredContentSize: CGSizeMake(self.previewControllerWidth, self.previewControllerHeight)];
          };
          rootView.userInteractionEnabled = true;
          vc.view = rootView;
          return vc;
      }
    }
    actionProvider:^UIMenu * _Nullable(NSArray<UIMenuElement *> * _Nonnull suggestedActions) {
    NSMutableArray* actions = [[NSMutableArray alloc] init];

    [self.actions enumerateObjectsUsingBlock:^(ContextMenuAction* thisAction, NSUInteger idx, BOOL *stop) {
      UIAction* actionMenuItem = [UIAction actionWithTitle:thisAction.title.capitalizedString image:[UIImage systemImageNamed:thisAction.systemIcon] identifier:nil handler:^(__kindof UIAction * _Nonnull action) {
        if (self.onPress != nil) {
          self->cancelled = false;
          self.onPress(@{
            @"index": @(idx),
            @"name": thisAction.title,
          });
        }
      }];

      actionMenuItem.attributes =
        (thisAction.destructive ? UIMenuElementAttributesDestructive : 0) |
        (thisAction.disabled ? UIMenuElementAttributesDisabled : 0);

      [actions addObject:actionMenuItem];
    }];

    return [UIMenu menuWithTitle:self.title children:actions];
  }];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  #if DEBUG
    return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  #else
    return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
  #endif
}

- (void)contextMenuInteraction:(UIContextMenuInteraction *)interaction willDisplayMenuForConfiguration:(UIContextMenuConfiguration *)configuration animator:(id<UIContextMenuInteractionAnimating>)animator  API_AVAILABLE(ios(13.0)){
  cancelled = true;
}

- (void)contextMenuInteraction:(UIContextMenuInteraction *)interaction willEndForConfiguration:(UIContextMenuConfiguration *)configuration
                      animator:(id<UIContextMenuInteractionAnimating>)animator  API_AVAILABLE(ios(13.0)) API_AVAILABLE(ios(13.0)){

  if (cancelled && self.onCancel) {
    self.onCancel(@{@"obj": @"cancelled"});
  }

}

- (UITargetedPreview *)contextMenuInteraction:(UIContextMenuInteraction *)interaction previewForHighlightingMenuWithConfiguration:(UIContextMenuConfiguration *)configuration API_AVAILABLE(ios(13.0)) {
    UIPreviewTarget* previewTarget = [[UIPreviewTarget alloc] initWithContainer:self center:self.reactSubviews.firstObject.center];
    UIPreviewParameters* previewParams = [[UIPreviewParameters alloc] init];
    previewParams.backgroundColor = UIColor.clearColor;

    return [[UITargetedPreview alloc] initWithView:self.reactSubviews.firstObject parameters:previewParams target:previewTarget];
}

- (void)contextMenuInteraction:(UIContextMenuInteraction *)interaction willPerformPreviewActionForMenuWithConfiguration:(UIContextMenuConfiguration *)configuration
                      animator:(id<UIContextMenuInteractionCommitAnimating>)animator  API_AVAILABLE(ios(13.0)){
    
    self->cancelled = false;
    self.onPress(@{
        @"index": @(100),
        @"name": @"preview",
      });
};

@end
