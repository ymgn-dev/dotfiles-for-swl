import { installHelper } from '~/utils/install-helper';

export const installVolta = async () => {
  await installHelper({
    commandName: 'proto',
    requirePassword: false,
    execaAction: (execa) => {
      return execa(
        `
        sudo -S apt install -y unzip gzip xz-utils
        curl -fsSL https://moonrepo.dev/install/proto.sh | bash
        `,
        { shell: true },
      );
    },
  });
};
