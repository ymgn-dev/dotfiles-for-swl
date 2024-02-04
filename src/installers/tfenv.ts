import { installHelper } from '~/utils/install-helper';

export const installTfenv = async () => {
  await installHelper({
    commandName: 'tfenv',
    execaAction: (execa) => {
      return execa(
        `
        git clone --depth=1 https://github.com/tfutils/tfenv.git ~/.tfenv
        `,
        { shell: true },
      );
    },
  });
};
